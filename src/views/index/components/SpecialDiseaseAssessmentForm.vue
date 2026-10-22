<template>
  <a-card class="form-card">
    <template #title>
      <SearchOutlined />
      7 专病评估
    </template>

    <!-- 7.1 嗜铬细胞瘤术前评估 -->
    <div class="sub-section-title">
      <ExperimentOutlined />
      7.1 心血管系统
    </div>

    <!-- 7.1.1 肿瘤情况 -->
    <div class="consciousness-sub-group">
      <div class="sub-section-title plain-style">7.1.1 肿瘤情况</div>
      <a-row :gutter="16">
        <a-col :span="12">
          <a-form-item label="位置与侧别">
            <a-input
              v-model:value="
                specialDiseaseAssessmentData.pheochromocytomaPreopAssessment.tumorInfo.location
              "
              placeholder="请输入位置与侧别"
            >
            </a-input>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="三维径线">
            <a-input
              v-model:value="
                specialDiseaseAssessmentData.pheochromocytomaPreopAssessment.tumorInfo.dimensions
              "
              placeholder="三维径线"
            />
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item label="内分泌功能"> </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="血MN(pg/ml)">
            <a-input
              v-model:value="
                specialDiseaseAssessmentData.pheochromocytomaPreopAssessment.tumorInfo.bloodMN
              "
              placeholder="血MN(pg/ml)"
            />
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="血NMN(pg/ml)">
            <a-input
              v-model:value="
                specialDiseaseAssessmentData.pheochromocytomaPreopAssessment.tumorInfo.bloodNMN
              "
              placeholder="血NMN(pg/ml)"
            />
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="24h尿去甲肾上腺素(μg)">
            <a-input
              v-model:value="
                specialDiseaseAssessmentData.pheochromocytomaPreopAssessment.tumorInfo.urineNE24h
              "
              placeholder="24h尿去甲肾上腺素(μg)"
            />
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="24h尿肾上腺素(μg)">
            <a-input
              v-model:value="
                specialDiseaseAssessmentData.pheochromocytomaPreopAssessment.tumorInfo.urineE24h
              "
              placeholder="24h尿肾上腺素(μg)"
            />
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item label="24h尿多巴胺(μg)">
            <a-input
              v-model:value="
                specialDiseaseAssessmentData.pheochromocytomaPreopAssessment.tumorInfo.urineDA24h
              "
              placeholder="24h尿多巴胺(μg)"
            />
          </a-form-item>
        </a-col>
      </a-row>
    </div>

    <!-- 7.1.2 临床症状 -->
    <div class="consciousness-sub-group">
      <div class="sub-section-title plain-style">7.1.2 临床症状</div>
      <a-row :gutter="16">
        <a-col :span="24">
          <a-input
            v-model:value="
              specialDiseaseAssessmentData.pheochromocytomaPreopAssessment.clinicalSymptoms
                .specificSymptoms
            "
            placeholder="临床症状"
          />
        </a-col>
      </a-row>
    </div>

    <!-- 7.1.3 术前用药 -->
    <div class="consciousness-sub-group">
      <div class="sub-section-title plain-style">7.1.3 术前用药</div>
      <a-row :gutter="16">
        <a-col :span="6">
          <a-form-item label="药物名称">
            <a-input
              v-model:value="
                specialDiseaseAssessmentData.pheochromocytomaPreopAssessment.preoperativeMedication
                  .drugName
              "
              placeholder="药物名称"
            />
          </a-form-item>
        </a-col>

        <a-col :span="6">
          <a-form-item label="药物剂量">
            <a-input
              v-model:value="
                specialDiseaseAssessmentData.pheochromocytomaPreopAssessment.preoperativeMedication
                  .drugDosage
              "
              placeholder="药物剂量"
            />
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="用药时长">
            <a-input
              v-model:value="
                specialDiseaseAssessmentData.pheochromocytomaPreopAssessment.preoperativeMedication
                  .medicationDuration
              "
              placeholder="用药时长"
            />
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="体重改变">
            <a-input
              v-model:value="
                specialDiseaseAssessmentData.pheochromocytomaPreopAssessment.preoperativeMedication
                  .weightChange
              "
              placeholder="体重改变"
            />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="肢端温度、湿度">
            <a-input
              v-model:value="
                specialDiseaseAssessmentData.pheochromocytomaPreopAssessment.preoperativeMedication
                  .extremityTempHumidity
              "
              placeholder="肢端温度、湿度"
            />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="鼻塞">
            <a-input
              v-model:value="
                specialDiseaseAssessmentData.pheochromocytomaPreopAssessment.preoperativeMedication
                  .nasalCongestion
              "
              placeholder="请输入鼻塞"
            >
            </a-input>
          </a-form-item>
        </a-col>
      </a-row>
    </div>
  </a-card>
</template>

<script setup>
import { ref } from 'vue'
import { SearchOutlined, ExperimentOutlined } from '@ant-design/icons-vue'

// Props
const specialDiseaseAssessmentData = defineModel('specialDiseaseAssessmentData')

// 表单引用
const formRef = ref()

// 验证表单
const validateForm = async () => {
  try {
    if (formRef.value) {
      await formRef.value.validate()
    }
    return { isValid: true, errors: [] }
  } catch (error) {
    console.error('专病评估表单验证失败:', error)
    return { isValid: false, errors: ['专病评估信息验证失败'] }
  }
}

// 暴露方法给父组件
defineExpose({
  validateForm
})
</script>

<style lang="scss" scoped>
.form-card {
  margin-bottom: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

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

.consciousness-sub-group {
  margin-bottom: 16px;
  padding: 12px;
  background: #fafafa;
  border-radius: 6px;
  border: 1px solid #f0f0f0;
}

:deep(.ant-form-item-label) {
  font-weight: 600;
}
</style>
