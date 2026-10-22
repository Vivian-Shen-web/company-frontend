<template>
  <a-card class="form-card">
    <template #title>
      <HeartOutlined />
      2 一般情况评估
    </template>
    <a-row :gutter="16">
      <!-- 2.1 心率 -->
      <a-col :span="8">
        <a-form-item label="2.1 心率">
          <a-input
            v-model:value="patientData.result.generalAssessment.heartRate.content"
            placeholder="请输入心率"
            suffix="次/分"
          />
        </a-form-item>
      </a-col>
      <!-- 2.2 血压 -->
      <a-col :span="8">
        <a-form-item label="2.2 血压">
          <a-input
            v-model:value="patientData.result.generalAssessment.bloodPressure.content"
            placeholder="请输入血压"
            suffix="mmHg"
          />
        </a-form-item>
      </a-col>
      <!-- 2.3 血氧饱和度 -->
      <a-col :span="8">
        <a-form-item label="2.3 SpO2">
          <a-input
            v-model:value="patientData.result.generalAssessment.spO2.content"
            placeholder="请输入SpO2"
            suffix="%"
          />
        </a-form-item>
      </a-col>
      <!-- 2.4 意识状态 -->
      <a-col :span="12">
        <a-form-item label="2.4 意识状态">
          <a-select
            v-model:value="patientData.result.generalAssessment.consciousness.content"
            placeholder="请选择意识状态"
          >
            <a-select-option
              v-for="item in ASSESSMENT_CONSTANTS.CONSCIOUSNESS_STATES"
              :key="item.value"
              :value="item.value"
            >
              {{ item.label }}
            </a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
      <a-col :span="6">
        <a-form-item label="2.5 ASA分级">
          <a-select
            v-model:value="patientData.result.generalAssessment.asaGrade.content"
            placeholder="请选择ASA分级"
          >
            <a-select-option
              v-for="item in ASSESSMENT_CONSTANTS.ASA_GRADES"
              :key="item.value"
              :value="item.value"
            >
              {{ item.label }}
            </a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
      <a-col :span="6">
        <a-form-item label="2.6 活动耐量">
          <a-select
            v-model:value="patientData.result.generalAssessment.activityTolerance.content"
            placeholder="请选择活动耐量"
          >
            <a-select-option
              v-for="item in ASSESSMENT_CONSTANTS.ACTIVITY_TOLERANCE"
              :key="item.value"
              :value="item.value"
            >
              {{ item.label }}
            </a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
    </a-row>

    <a-row>
      <a-col :span="12">
        <!-- 2.4子项分组 -->
        <div class="consciousness-sub-group">
          <!-- 2.4.1 GCS评分 -->
          <div class="sub-section-title plain-style">2.4.1 GCS评分（一般患者）</div>
          <a-row :gutter="16">
            <a-col :span="8">
              <a-form-item label="睁眼反应">
                <a-select
                  v-model:value="patientData.result.generalAssessment.gcsScore.eyeResponse"
                  placeholder="请选择睁眼反应"
                >
                  <a-select-option
                    v-for="item in ASSESSMENT_CONSTANTS.GCS_EYE_OPENING"
                    :key="item.value"
                    :value="item.value"
                  >
                    {{ item.label }}
                  </a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <a-form-item label="语言反应">
                <a-select
                  v-model:value="patientData.result.generalAssessment.gcsScore.verbalResponse"
                  placeholder="请选择语言反应"
                >
                  <a-select-option
                    v-for="item in ASSESSMENT_CONSTANTS.GCS_VERBAL_RESPONSE"
                    :key="item.value"
                    :value="item.value"
                  >
                    {{ item.label }}
                  </a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :span="8">
              <a-form-item label="运动反应">
                <a-select
                  v-model:value="patientData.result.generalAssessment.gcsScore.motorResponse"
                  placeholder="请选择运动反应"
                >
                  <a-select-option
                    v-for="item in ASSESSMENT_CONSTANTS.GCS_MOTOR_RESPONSE"
                    :key="item.value"
                    :value="item.value"
                  >
                    {{ item.label }}
                  </a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
          </a-row>
          <!-- GCS总分显示 -->
          <div class="gcs-total">总分：{{ calculateGCSTotal() }}分</div>
        </div>

        <div class="consciousness-sub-group">
          <!-- 2.4.2 RASS评分 -->
          <div class="sub-section-title plain-style">2.4.2 RASS评分（镇静状态患者）</div>
          <a-row :gutter="16">
            <a-col :span="12">
              <a-form-item label="RASS评分">
                <a-select
                  v-model:value="patientData.result.generalAssessment.rassScore.content"
                  placeholder="请选择RASS评分"
                >
                  <a-select-option
                    v-for="item in ASSESSMENT_CONSTANTS.RASS_SCORES"
                    :key="item.value"
                    :value="item.value"
                  >
                    {{ item.label }}
                  </a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
          </a-row>
        </div>
      </a-col>
    </a-row>
  </a-card>
</template>

<script setup>
import { defineExpose } from 'vue'
import { HeartOutlined } from '@ant-design/icons-vue'
import { ASSESSMENT_CONSTANTS } from '@/services/evaluate'

const patientData = defineModel('patientData')

// 计算 GCS 总分
const calculateGCSTotal = () => {
  const gcsScore = patientData.value.result.generalAssessment.gcsScore
  if (!gcsScore) return 0

  const eyeResponse = gcsScore.eyeResponse?.content || 0
  const verbalResponse = gcsScore.verbalResponse?.content || 0
  const motorResponse = gcsScore.motorResponse?.content || 0

  return eyeResponse + verbalResponse + motorResponse
}

// 验证表单
const validateForm = () => {
  const generalAssessment = patientData.value.result.generalAssessment
  if (!generalAssessment.heartRate) {
    return { valid: false, message: '请填写心率' }
  }
  if (!generalAssessment.bloodPressure) {
    return { valid: false, message: '请填写血压' }
  }
  if (!generalAssessment.spO2) {
    return { valid: false, message: '请填写血氧饱和度' }
  }
  return { valid: true }
}

// 暴露方法给父组件
defineExpose({
  validateForm,
  calculateGCSTotal
})
</script>

<style lang="scss" scoped>
.form-card {
  margin-bottom: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.consciousness-sub-group {
  margin-bottom: 16px;
  padding: 12px;
  background-color: #f8f9fa;
  border-radius: 6px;
  border-left: 4px solid #1677ff;
}

.sub-section-title {
  font-weight: 600;
  margin-bottom: 12px;
  color: #1677ff;
  font-size: 14px;
}

.plain-style {
  background: none;
  border: none;
  padding: 0;
}

/* GCS总分显示样式 */
.gcs-total {
  text-align: center;
  font-weight: 600;
  color: #52c41a;
  margin-top: 8px;
  padding: 8px;
  background-color: #f6ffed;
  border-radius: 4px;
  border: 1px solid #b7eb8f;
}

:deep(.ant-form-item-label) {
  font-weight: 600;
}

:deep(.ant-input),
:deep(.ant-select),
:deep(.ant-input-number),
:deep(.ant-textarea) {
  border-radius: 6px;
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
</style>
