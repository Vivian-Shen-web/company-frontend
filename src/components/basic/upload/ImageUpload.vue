<!-- 文件描述 -->
<script setup lang="ts">
import { computed, ref } from 'vue'
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons-vue'
import { message } from 'ant-design-vue'
import { http } from '@/utils'

const imageUrl = defineModel<string>('value', { default: '' })
const uploadUrl = '/serviceq-system/inspection-item/upload'
// const baseURL = import.meta.env.VITE_SERVER_PATH || '/api/'

const loading = ref<boolean>(false)

const beforeUpload = (file: File) => {
  const isJpgOrPng =
    file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/png'
  if (!isJpgOrPng) {
    message.error('只能上传JPG/PNG格式的图片!')
  }
  const isLt2M = file.size / 1024 / 1024 < 5
  if (!isLt2M) {
    message.error('图片不能超过5M!')
  }
  return isJpgOrPng && isLt2M
}
const req = (fileInfo: any) => {
  loading.value = true
  const formData = new FormData()
  formData.append('file', fileInfo.file)
  http
    .post<string>(uploadUrl, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then((r) => {
      if (r.success) {
        loading.value = false
        imageUrl.value = r.data
      } else {
        uploadFail()
      }
    })
    .catch(() => {
      uploadFail()
    })
}
const uploadFail = () => {
  loading.value = false
}
</script>

<template>
  <AUpload
    :customRequest="req"
    name="avatar"
    list-type="picture-card"
    class="avatar-uploader"
    :show-upload-list="false"
    :before-upload="beforeUpload"
  >
    <span v-if="imageUrl">
      {{ imageUrl }}
      <!-- <ImageDisplay class="uploaded-image" v-if="imageUrl" :zoom="false" :src="imageUrl"></ImageDisplay> -->
    </span>
    <div v-else>
      <loading-outlined v-if="loading"></loading-outlined>
      <plus-outlined v-else></plus-outlined>
      <div class="ant-upload-text">Upload</div>
    </div>
  </AUpload>
</template>

<style scoped lang="scss">
.avatar-uploader > .ant-upload {
  width: 128px;
  height: 128px;
}

.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}

.uploaded-image {
  width: 100%;
  height: 100%;
}
</style>
