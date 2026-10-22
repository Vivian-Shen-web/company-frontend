<script setup lang="ts">
import { ref } from 'vue'
import { IconUtils } from '../icon'

const props = withDefaults(
  defineProps<{
    foldable?: boolean
    dragable?: boolean
  }>(),
  { foldable: true, dragable: true }
)
const fold = defineModel<boolean>('fold')
const emits = defineEmits<{
  /**
   * 保存事件，如果有保存第一个参数保存返回的对象，
   */
  onDrag: [data: { width: number; left: number; right: number }]
}>()

const toggleFold = () => {
  fold.value = !fold.value
}

const icons = {
  left: IconUtils.prefix('ANTDESIGN-OUTLINED', 'double-left'),
  right: IconUtils.prefix('ANTDESIGN-OUTLINED', 'double-right')
}
const dragging = ref(false)
const content = ref<HTMLElement | null>(null)
const leftWidth = ref(300)

const startDrag = (e: any) => {
  if (fold.value || !props.dragable) {
    //折叠的时候也不让拖动,
    return
  }
  dragging.value = true
  let width = content.value?.clientWidth ?? 0

  let startX = e.clientX

  const onMousemove = function (e: MouseEvent) {
    let endX = e.clientX + 4
    let moveLen = endX - startX
    startX = endX
    leftWidth.value += moveLen

    emits('onDrag', {
      width: width,
      left: leftWidth.value,
      right: width - leftWidth.value
    })
  }
  const onMouseup = function () {
    document.removeEventListener('mousemove', onMousemove as EventListener)
    document.removeEventListener('mouseup', onMouseup as EventListener)
    //   if (_this.name) {
    //     _this.setting.set(prefix + _this.name, _this.leftWidth);
    //   }
    dragging.value = false
  }
  document.addEventListener('mousemove', onMousemove as EventListener)

  document.addEventListener('mouseup', onMouseup as EventListener)
  return false
}
</script>

<template>
  <div class="page-lr">
    <div class="page-lr-header">
      <slot name="top"></slot>
    </div>
    <div class="page-lr-content" ref="content">
      <div
        class="group-left"
        :class="{ fold: fold, unfold: !fold }"
        :style="{ marginLeft: '-' + leftWidth + 'px' }"
      >
        <div class="page-lr-box-left" :style="{ width: leftWidth + 'px' }">
          <slot name="left"></slot>
        </div>
        <div class="page-lr-box-middle" :class="{ dragging: dragging }">
          <template v-if="props.foldable">
            <div class="fold middle-icon" v-if="!fold">
              <ATooltip placement="right">
                <AButton type="default" @click="toggleFold()" shape="circle">
                  <IqIcon :icon="icons.left"></IqIcon>
                </AButton>
                <template #title>收起</template>
              </ATooltip>
            </div>
            <div class="expand middle-icon" v-if="fold">
              <ATooltip placement="right">
                <AButton type="default" @click="toggleFold()" shape="circle">
                  <IqIcon :icon="icons.right"></IqIcon>
                </AButton>
                <template #title>展开</template>
              </ATooltip>
            </div>
          </template>
          <div class="drag-handler" @mousedown="startDrag($event)">
            <div class="spliter"></div>
          </div>
        </div>
      </div>
      <div class="page-lr-box-right">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-lr {
  @apply flex flex-col h-full w-full overflow-visible;
}
.page-lr-content {
  @apply flex flex-1 overflow-visible;
}
.group-left {
  height: 100%;
  position: relative;
  display: flex;
  transition: 0.3s;

  &.unfold {
    //非折叠的时候左margin保证0
    margin-left: 0 !important;
  }

  &.fold {
    //折叠的时候隐藏拖动线
    //折叠的时候永久显示展开按钮
    //折叠的时候宽度永久0
    .page-lr-box-middle {
      width: 0 !important;
      > div.spliter {
        display: none;
      }

      .middle-icon {
        display: block;
      }
    }
  }

  &:hover {
    .page-lr-box-middle .middle-icon {
      display: block;
    }
  }

  .page-lr-box-middle {
    position: absolute;
    z-index: 99;
    top: 0;
    bottom: 0;
    right: -4px;
    width: 10px;
    display: flex;
    justify-content: center;
    > .drag-handler {
      width: 100%;
      height: 100%;
      cursor: ew-resize;
      display: flex;
      justify-content: center;

      .spliter {
        width: 2px;
        background: var(--page-lr-spliter-bg, #eee);
        transition: 0.3s;
      }
    }

    &:hover,
    &.dragging {
      > .drag-handler {
        .spliter {
          background: var(--page-lr-spliter-bg-hover, var(--ant-primary-color, #aaa));
        }
      }

      .middle-icon {
        display: block;
      }
    }

    .middle-icon {
      z-index: 10000;
      position: absolute;
      top: 50px;
      border-radius: 50%;
      display: none;
      &.expand {
        > button > span {
          padding-left: 20px;
          margin-right: -5px;
        }
      }
    }
  }
}
.page-lr-box-left {
  @apply h-full pr-6 overflow-visible;
}
.page-lr-box-right {
  @apply flex-1 h-full overflow-y-auto;
}
</style>
