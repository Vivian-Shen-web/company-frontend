<template>
  <a-card class="form-card">
    <template #title>
      <ExperimentOutlined />
      4 气道评估
    </template>

    <!-- 4.1 口咽 -->
    <div class="sub-section-title">
      <SmileOutlined />
      4.1 口咽
    </div>
    <a-row :gutter="16">
      <a-col :span="6">
        <a-form-item label="4.1.1 Mallampati分级">
          <a-select
            v-model:value="airwayAssessmentData.mallampatiScore.hasHistory"
            placeholder="请选择Mallampati分级"
          >
            <a-select-option value="I级">I级</a-select-option>
            <a-select-option value="II级">II级</a-select-option>
            <a-select-option value="III级">III级</a-select-option>
            <a-select-option value="IV级">IV级</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
      <a-col :span="6">
        <a-form-item label="4.1.2 鼾症/OSAHS">
          <a-select
            v-model:value="airwayAssessmentData.snoringOSAHS.hasHistory"
            placeholder="请选择鼾症情况"
          >
            <a-select-option value="有">有</a-select-option>
            <a-select-option value="无">无</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
      <a-col :span="6">
        <a-form-item label="4.1.3 松动牙齿">
          <a-select
            v-model:value="airwayAssessmentData.looseTeeth.hasHistory"
            placeholder="请选择松动牙齿情况"
          >
            <a-select-option value="无">无</a-select-option>
            <a-select-option value="有">有</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
      <a-col :span="6">
        <a-form-item label="4.1.4 张口度(cm)">
          <a-input-number
            v-model:value="airwayAssessmentData.mouthOpening.hasHistory"
            :min="0"
            :max="10"
            :step="0.1"
            placeholder="请输入张口度"
            style="width: 100%"
          />
        </a-form-item>
      </a-col>
    </a-row>

    <!-- 4.2 颈椎 -->
    <div class="sub-section-title">
      <MedicineBoxOutlined />
      4.2 颈椎
    </div>
    <a-row :gutter="16">
      <a-col :span="12">
        <a-form-item label="4.2.1 颈椎病">
          <a-select
            v-model:value="airwayAssessmentData.cervicalSpondylosis.hasHistory"
            placeholder="请选择颈椎病情况"
          >
            <a-select-option value="有">有</a-select-option>
            <a-select-option value="无">无</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
      <a-col :span="12">
        <a-form-item label="4.2.2 颈椎活动度">
          <a-select
            v-model:value="airwayAssessmentData.neckMobility.hasHistory"
            placeholder="请选择颈椎活动度"
          >
            <a-select-option value="正常">正常</a-select-option>
            <a-select-option value="轻度受限">轻度受限</a-select-option>
            <a-select-option value="中度受限">中度受限</a-select-option>
            <a-select-option value="重度受限">重度受限</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
    </a-row>

    <!-- 4.3 下颌 -->
    <div class="sub-section-title">
      <AuditOutlined />
      4.3 下颌
    </div>
    <a-row :gutter="16">
      <a-col :span="8">
        <a-form-item label="4.3.1 小下颌">
          <a-select
            v-model:value="airwayAssessmentData.micrognathia.hasHistory"
            placeholder="请选择小下颌情况"
          >
            <a-select-option value="无">无</a-select-option>
            <a-select-option value="轻度">轻度</a-select-option>
            <a-select-option value="中度">中度</a-select-option>
            <a-select-option value="重度">重度</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
      <a-col :span="8">
        <a-form-item label="4.3.2 咬上唇试验">
          <a-select
            v-model:value="airwayAssessmentData.upperLipBiteTest.hasHistory"
            placeholder="请选择咬上唇试验"
          >
            <a-select-option value="I级">I级</a-select-option>
            <a-select-option value="II级">II级</a-select-option>
            <a-select-option value="III级">III级</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
      <a-col :span="8">
        <a-form-item label="4.3.3 甲颏距(cm)">
          <a-input-number
            v-model:value="airwayAssessmentData.thyromentalDistance.hasHistory"
            :min="0"
            :max="15"
            :step="0.1"
            placeholder="请输入甲颏距"
            style="width: 100%"
          />
        </a-form-item>
      </a-col>
    </a-row>
  </a-card>
</template>

<script setup>
import {
  ExperimentOutlined,
  SmileOutlined,
  MedicineBoxOutlined,
  AuditOutlined
} from '@ant-design/icons-vue'

const airwayAssessmentData = defineModel('airwayAssessmentData')

// 验证表单
const validateForm = () => {
  const errors = []

  // 检查必填字段
  if (!airwayAssessmentData.value.oropharynx.mallampati) {
    errors.push('请选择Mallampati分级')
  }

  if (!airwayAssessmentData.value.oropharynx.snoring) {
    errors.push('请选择鼾症/OSAHS情况')
  }

  if (!airwayAssessmentData.value.oropharynx.looseTooth) {
    errors.push('请选择松动牙齿情况')
  }

  if (
    airwayAssessmentData.value.oropharynx.mouthOpening === null ||
    airwayAssessmentData.value.oropharynx.mouthOpening === undefined
  ) {
    errors.push('请输入张口度')
  }

  if (!airwayAssessmentData.value.cervicalSpine.disease) {
    errors.push('请选择颈椎病情况')
  }

  if (!airwayAssessmentData.value.cervicalSpine.mobility) {
    errors.push('请选择颈椎活动度')
  }

  if (!airwayAssessmentData.value.mandible.micrognathia) {
    errors.push('请选择小下颌情况')
  }

  if (!airwayAssessmentData.value.mandible.thyromentalTest) {
    errors.push('请选择咬上唇试验')
  }

  if (
    airwayAssessmentData.value.mandible.thyromentalTestDistance === null ||
    airwayAssessmentData.value.mandible.thyromentalTestDistance === undefined
  ) {
    errors.push('请输入甲颏距')
  }

  return {
    isValid: errors.length === 0,
    errors
  }
}

// 暴露方法给父组件
defineExpose({
  validateForm
})
</script>

<style scoped>
.form-card {
  margin-bottom: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

:deep(.ant-card-head) {
  background: linear-gradient(
    135deg,
    rgba(22, 119, 255, 0.05) 0%,
    rgba(22, 119, 255, 0.1) 50%,
    rgba(22, 119, 255, 0.05) 100%
  );
  border-bottom: 2px solid rgba(22, 119, 255, 0.2);
  border-radius: 8px 8px 0 0;
  transition: all 0.3s ease;
}

:deep(.ant-card-head:hover) {
  background: linear-gradient(
    135deg,
    rgba(22, 119, 255, 0.08) 0%,
    rgba(22, 119, 255, 0.15) 50%,
    rgba(22, 119, 255, 0.08) 100%
  );
  border-bottom-color: rgba(22, 119, 255, 0.3);
}

:deep(.ant-card-head-title) {
  background: linear-gradient(
    135deg,
    rgb(22, 119, 255) 0%,
    rgb(45, 140, 255) 50%,
    rgb(22, 119, 255) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 600;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
}

:deep(.ant-card-head-title .anticon) {
  font-size: 16px;
  color: rgb(22, 119, 255);
  -webkit-text-fill-color: rgb(22, 119, 255);
}

.form-card :deep(.ant-card-head-title) {
  color: white;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
}

/* 二级标题样式 - 基于主色调 */
.sub-section-title {
  background: linear-gradient(
    135deg,
    rgb(22, 119, 255) 0%,
    rgb(45, 140, 255) 50%,
    rgb(70, 160, 255) 100%
  );
  color: white;
  padding: 12px 20px;
  margin: 20px 0 15px 0;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  box-shadow: 0 2px 8px rgba(22, 119, 255, 0.2);
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
}

.sub-section-title:hover {
  background: linear-gradient(
    135deg,
    rgb(15, 100, 220) 0%,
    rgb(35, 125, 235) 50%,
    rgb(55, 145, 245) 100%
  );
  box-shadow: 0 4px 12px rgba(22, 119, 255, 0.3);
}

/* 二级标题图标 - 使用ant-design图标 */
.sub-section-title .anticon {
  font-size: 16px;
  color: white;
}

/* 普通样式的二级标题 - 用于GCS和RASS评分 */
.sub-section-title.plain-style {
  background: #f5f5f5;
  color: #333;
  padding: 8px 15px;
  margin: 15px 0 10px 0;
  border-radius: 4px;
  font-weight: 500;
  font-size: 14px;
  box-shadow: none;
  border-left: 3px solid rgba(22, 119, 255, 0.3);
}

.sub-section-title.plain-style:hover {
  background: #f0f0f0;
  box-shadow: none;
  transform: none;
}

.sub-section-title.plain-style .anticon {
  display: none;
}

:deep(.ant-form-item-label > label) {
  font-weight: 500;
  color: #333;
}

:deep(.ant-input),
:deep(.ant-select-selector),
:deep(.ant-input-number) {
  border-radius: 6px;
}

:deep(.ant-input:focus),
:deep(.ant-select-focused .ant-select-selector),
:deep(.ant-input-number:focus) {
  border-color: #1890ff;
  box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
}
</style>
