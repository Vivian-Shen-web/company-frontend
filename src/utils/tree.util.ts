import {
  keys,
  pick,
  reject,
  includes,
  __,
  concat,
  curry,
  props,
  compose,
  map,
  sortBy,
  prop
} from 'ramda'

const CHILDREN_KEY = 'children'

const _renameProperties = <T extends Partial<any>>(map: Record<keyof T, string>, treeRoot: T) => {
  const node = treeRoot

  const ks: any = keys(node)
  const mapKs = keys(map)

  const remainKeys = reject(includes(__, concat(mapKs, [CHILDREN_KEY])))(ks)
  const newRoot: any = pick(remainKeys, node)
  mapKs.forEach((key) => {
    newRoot[map[key]] = node[key]
  })

  const children = node[CHILDREN_KEY]
  if (children && children instanceof Array) {
    newRoot[CHILDREN_KEY] = children.map((n) => {
      return _renameProperties(map, n)
    })
  }
  return newRoot
}
/**
 * 重命名树结构里面的属性
 *
 * 参数1：要改变的映射，比如{"str1":"str2"} 会把树结构上所有str1的属性名称换为str2
 * 参数2：树结构根节点（包含children）或树结构数组
 *
 * 比如输入{str1:1},{"str1":"str2"} 会得到{str2:1}
 */
const renamePropertiesCurry = curry(
  <T extends Partial<any>>(m: Record<keyof T, string>, treeRoot: T | T[]) => {
    if (treeRoot instanceof Array) {
      // @ts-ignore
      return compose(map(), curry(_renameProperties))(m)(treeRoot)
    } else {
      return _renameProperties(m, treeRoot)
    }
  }
)

const _locateNode = <T>(target: Partial<T>, f: Function | null, treeRoot: T | T[]) => {
  const getMatcher = props(keys(target) as any)

  const matchs = compose(
    curry((l: any[], t: any[]) => {
      for (let i = 0; i < l.length; i++) {
        if (l[i] != t[i]) {
          return false
        }
      }
      return true
    })(getMatcher(target)),
    getMatcher
  )

  const loop = (node: any): any => {
    if (matchs(node)) {
      if (f) {
        f(node, true)
      }
      return node
    }
    const children = node[CHILDREN_KEY]
    if (children && children instanceof Array) {
      for (let i = 0; i < children.length; i++) {
        const tmp = loop(children[i])
        if (tmp) {
          if (f) {
            f(node, false)
          }
          return tmp
        }
      }
    }
    return null
  }
  if (treeRoot instanceof Array) {
    for (let i = 0; i < treeRoot.length; i++) {
      const tmp = loop(treeRoot[i])
      if (tmp) {
        return tmp
      }
    }
  } else {
    return loop(treeRoot)
  }
  return null
}
/**
 * 查找树结构上指定属性（可多属性）的子节点
 *
 * 参数1：要查找的属性
 * 参数2：方法，对于找到的节点以及此节点的父节点会触发调用，方法第一个参数节点信息，第二个true则是命中节点/false标识命中的祖先节点
 * 参数3：树结构根节点（包含children） 或树结构数组
 *
 * 返回：查找到的第一个节点
 */
const locateNodeCurry = curry(_locateNode)

/**
 * 遍历树节点
 */
const loopTreeCurry = curry(
  (fn: Function | { before: null | Function; after: null | Function }, treeRoot: any) => {
    const level = 0
    let _before: null | Function = null
    let _after: null | Function = null
    if (fn instanceof Function) {
      _before = fn
    } else {
      _before = fn.before
      _after = fn.after
    }
    const loop = (node: any, level: number): any => {
      if (_before) {
        _before(node, level)
      }
      const children = node[CHILDREN_KEY]
      if (children && children instanceof Array) {
        for (let i = 0; i < children.length; i++) {
          loop(children[i], level + 1)
        }
      }
      if (_after) {
        _after(node, level)
      }
    }
    if (treeRoot instanceof Array) {
      for (let i = 0; i < treeRoot.length; i++) {
        loop(treeRoot[i], level)
      }
    } else {
      loop(treeRoot, level)
    }
  }
)
const selectableLeaf = loopTreeCurry((node: any) => {
  if (node.children && node.children.length > 0) {
    node.selectable = false
  } else {
    node.selectable = true
  }
})
const sortTree = loopTreeCurry((node: any) => {
  if (node.children) {
    node.children = sortBy(prop('order'))(node.children)
  }
})

//indeterminate;

const checkIndeterminate = (node: any) => {
  let countIndeterminate = 0
  let countSelected = 0
  node.children.forEach((item: any) => {
    if (item.indeterminate) {
      countIndeterminate++
    }
    if (item.selected) {
      countSelected++
    }
  })
  if (countIndeterminate > 0) {
    node.indeterminate = true
    node.selected = false
  } else if (countSelected == node.children.length) {
    node.selected = true
    node.indeterminate = false
  } else if (countSelected == 0) {
    node.selected = false
    node.indeterminate = false
  } else {
    node.selected = false
    node.indeterminate = true
  }
}
const changeIndeterminateTree = (nodeFilter: any, flag: boolean, treeRoot: any) => {
  const checkAllChildren = (node: any, _flag: boolean) => {
    node.selected = _flag
    node.indeterminate = false
    if (node.children) {
      node.children.forEach((sub: any) => {
        checkAllChildren(sub, _flag)
      })
    }
  }
  return locateNodeCurry(nodeFilter, (node: any, isCurrent: boolean) => {
    if (isCurrent) {
      checkAllChildren(node, flag)
    } else {
      checkIndeterminate(node)
    }
  })(treeRoot)
}

export {
  renamePropertiesCurry,
  locateNodeCurry,
  loopTreeCurry,
  selectableLeaf,
  sortTree,
  changeIndeterminateTree,
  checkIndeterminate
}
