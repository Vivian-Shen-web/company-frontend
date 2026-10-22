<!-- eslint-disable vue/multi-word-component-names -->
<route lang="json">
{
  "meta": {
    "title": "智能评估"
  }
}
</route>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { message } from 'ant-design-vue'
import {
  UserOutlined,
  MedicineBoxOutlined,
  RobotOutlined,
  ClockCircleOutlined,
  CalendarOutlined
} from '@ant-design/icons-vue' // 1. 导入evaluate.ts中定义的接口和API
import {
  evaluateApi,
  type QueryParams,
  type FormState,
  type ApiResponse
} from '@/services/evaluate'
import BasicInfoForm from './components/BasicInfoForm.vue'
import GeneralAssessmentForm from './components/GeneralAssessmentForm.vue'
import PersonalHistoryForm from './components/PersonalHistoryForm.vue'
import AirwayAssessmentForm from './components/AirwayAssessmentForm.vue'
import AuxiliaryExaminationForm from './components/AuxiliaryExaminationForm.vue'
import OrganSystemAssessmentForm from './components/OrganSystemAssessmentForm.vue'
import SpecialDiseaseAssessmentForm from './components/SpecialDiseaseAssessmentForm.vue'
const basicInfoFormRef = ref(null)
const generalAssessmentFormRef = ref(null)
const personalHistoryFormRef = ref(null)
const airwayAssessmentFormRef = ref(null)
const auxiliaryExaminationFormRef = ref(null)
const organSystemAssessmentFormRef = ref(null)
const specialDiseaseAssessmentForm = ref(null)
// 2. 响应式数据定义
// 2.1 查询参数
const queryParams = reactive<QueryParams>({
  patientId: ''
})

// 2.2 表单状态
const formState = reactive<FormState>({
  loading: false,
  submitting: false
})

// 2.3 患者评估数据
const patientData = ref<any>({
  patientInfo: {},
  result: {
    basicInfo: {
      preoperativeDiagnosis: {},
      plannedSurgery: {}
    }, // 基本信息
    generalAssessment: {
      heartRate: {
        content: '',
        extractionBasis: ''
      }, // 心率
      bloodPressure: {
        content: '',
        extractionBasis: ''
      }, // 血压
      spO2: {
        content: '',
        extractionBasis: ''
      }, // 血氧饱和度
      consciousness: {
        content: '',
        extractionBasis: ''
      }, // 意识状态
      gcsScore: {
        // GCS评分
        eyeResponse: '', // 睁眼反应评分
        verbalResponse: '', // 语言反应评分
        motorResponse: '', // 运动反应评分
        assessmentBasis: '',
        totalScore: '' // 总分
      },
      rassScore: {
        content: '',
        assessmentBasis: ''
      }, // RASS评分
      asaGrade: {
        content: '',
        assessmentBasis: ''
      }, // ASA分级
      activityTolerance: {
        content: '',
        assessmentBasis: ''
      } // 活动耐量
    }, // 一般情况评估
    personalHistory: {
      allergyHistory: {
        // 过敏史
        hasHistory: '', // 是否
        details: '', // 详细描述
        extractionBasis: ''
      },
      smokingHistory: {
        // 吸烟史
        hasHistory: '', // 是否
        details: '', // 详细描述
        extractionBasis: ''
      },
      alcoholHistory: {
        // 饮酒史
        hasHistory: '', // 是否
        details: '', // 详细描述
        extractionBasis: ''
      },
      drugAbuseHistory: {
        // 药物滥用史
        hasHistory: '', // 是否
        details: '', // 详细描述
        extractionBasis: ''
      },
      motionSicknessHistory: {
        // 晕动病史
        hasHistory: '', // 是否
        details: '', // 详细描述
        extractionBasis: ''
      },
      surgeryAnesthesiaHistory: {
        hasHistory: '', // 是否有手术史
        surgeryName: '', // 历次手术名称
        surgeryDate: '', // 历次手术时间日期
        anesthesiaMethod: '', // 历次手术麻醉方式
        ponvHistory: {
          // PONV病史
          nausea: '', // 术后恶心
          vomiting: '', // 术后呕吐
          noPonv: '' // 无PONV史
        }
      }
    }, // 个人史
    airwayAssessment: {
      mallampatiScore: {
        hasHistory: '',
        extractionBasis: ''
      }, // Mallampati分级
      snoringOSAHS: {
        hasHistory: '',
        extractionBasis: ''
      }, // 鼾症/OSAHS
      looseTeeth: {
        hasHistory: '',
        extractionBasis: ''
      }, // 松动牙齿
      mouthOpening: {
        hasHistory: '',
        extractionBasis: ''
      }, // 张口度(cm)

      cervicalSpondylosis: {
        hasHistory: '',
        extractionBasis: ''
      }, // 颈椎病
      neckMobility: {
        hasHistory: '',
        extractionBasis: ''
      }, // 颈椎活动度

      micrognathia: {
        hasHistory: '',
        extractionBasis: ''
      }, // 小下颌
      upperLipBiteTest: {
        hasHistory: '',
        extractionBasis: ''
      }, // 咬上唇试验
      thyromentalDistance: {
        hasHistory: '',
        extractionBasis: ''
      } // 甲颏距(cm)
    }, // 气道评估
    auxiliaryExamination: {
      // 血液检查项目
      cbc: {
        extractionBasis: '', // 提取依据
        content: '' // 字段内容
      }, // 5.1 全血细胞分析

      liverFunction: {
        extractionBasis: '', // 提取依据
        content: '' // 字段内容
      }, // 5.2 肝功能检查

      renalFunction: {
        extractionBasis: '', // 提取依据
        content: '' // 字段内容
      }, // 5.3 肾功能检查

      coagulationFunction: {
        extractionBasis: '', // 提取依据
        content: '' // 字段内容
      }, // 5.4 凝血功能检查

      // 影像学检查项目
      ecg: {
        extractionBasis: '', // 提取依据
        content: '' // 字段内容
      }, // 5.5 ECG心电图检查

      ucg: {
        extractionBasis: '', // 提取依据
        content: '' // 字段内容
      }, // 5.6 UCG超声心动图检查

      chestXRay: {
        extractionBasis: '', // 提取依据
        content: '' // 字段内容
      }, // 5.7 胸部正侧位X线检查

      pulmonaryFunction: {
        statextractionBasisus: '', // 提取依据
        content: '' // 字段内容
      }, // 5.8 肺功能检查

      arterialBloodGas: {
        extractionBasis: '', // 提取依据
        content: '' // 字段内容
      } // 5.9 动脉血气分析
    }, // 辅助检查
    organSystemAssessment: {
      cardiovascularSystem: {
        hypertension: {
          duration: '',
          maxBloodPressure: '',
          recentBloodPressure: '',
          medication: ''
        },
        coronaryHeartDisease: {
          duration: '',
          type: '',
          affectedVessels: '',
          stenosisDegree: '',
          revascularization: '',
          recentSymptoms: '',
          medication: ''
        },
        arrhythmia: {
          duration: '',
          type: '',
          attackFrequency: '',
          treatmentHistory: '',
          recentSymptoms: '',
          medication: ''
        }
      },
      respiratorySystem: {
        copd: {
          duration: '',
          severity: '',
          pulmonaryFunctionResult: '',
          recentSymptoms: '',
          medication: ''
        },
        asthma: {
          duration: '',
          severity: '',
          pulmonaryFunctionResult: '',
          recentSymptoms: '',
          medication: ''
        }
      },
      endocrineSystem: {
        diabetes: {
          // 糖尿病
          duration: '', // 患病时长
          type: '', // 类型
          recentBloodGlucose: '', // 近期血糖
          recentHbA1c: '', // 近期糖化血红蛋白
          medication: '', // 用药情况
          diabetesComplications: '' // 糖尿病合并症
        },
        hyperthyroidism: {
          duration: '',
          recentThyroidFunction: '',
          recentSymptoms: '',
          medication: ''
        },
        hypothyroidism: {
          duration: '',
          recentThyroidFunction: '',
          recentSymptoms: '',
          medication: ''
        },
        cushingSyndrome: {
          duration: '', // 患病时长
          recentCorticalFunction: '', // 近期皮质功能
          recentSymptoms: '', //近期症状
          keySigns: '', // 重点体征
          medication: '' // 用药情况
        }
      },
      digestiveSystem: {
        // 消化系统
        gerd: {
          // 胃食管反流病
          recentSymptoms: '', // 近期症状
          medication: '' // 用药情况
        },
        hepatitis: {
          // 肝炎
          type: '', // 类型
          bloodTransfusionTests: '', // 输血八项化验结果
          medication: '' // 用药情况
        },
        hepaticInsufficiency: {
          // 肝功能不全
          recentSymptoms: '', // 近期症状
          liverFunctionResults: '', // 肝功能化验结果
          medication: '' // 用药情况
        },
        cirrhosis: {
          // 肝硬化
          recentSymptoms: '', // 近期症状
          medication: '', // 用药情况
          varices: '', //食管胃底静脉曲张情况
          ascites: '' // 腹水情况
        }
      },
      urinarySystem: {
        // 泌尿系统
        renalInsufficiency: {
          // 肾功能不全
          recentSymptoms: '', // 近期症状
          renalFunctionResults: '', // 肾功能化验结果
          medication: '' // 用药情况
        },
        renalReplacementTherapy: {
          // 肾脏替代治疗
          typduratione: '', // 患病时长
          replacementMethod: '', // 替代治疗方式
          replacementFrequency: '', // 替代治疗频率
          medication: '' // 用药情况
        }
      },
      nervousSystem: {
        // 神经系统
        stroke: {
          // 脑卒中
          typduratione: '', // 患病时长
          affectedArea: '', // 受累部位
          sequelae: '', // 后遗症
          medication: '' // 用药情况
        },
        alzheimers: {
          // 阿尔茨海默病
          typduratione: '', // 患病时长
          medication: '' // 用药情况
        },
        parkinsons: {
          // 帕金森病
          recentSymptoms: '', // 近期症状
          medication: '' // 用药情况
        },
        peripheralNeuropathy: {
          // 周围神经病
          recentSymptoms: '', // 近期症状
          medication: '' // 用药情况
        }
      }
    }, // 器官系统评估（统一）
    specialDiseaseAssessment: {
      pheochromocytomaPreopAssessment: {
        // 嗜铬细胞瘤术前评估
        tumorInfo: {
          // 肿瘤情况
          location: '', // 位置与侧别
          dimensions: '', // 三维径线
          bloodMN: '', // 血MN(pg/ml)
          bloodNMN: '', // 血NMN(pg/ml)
          urineNE24h: '', // 24h尿去甲肾上腺素(μg)
          urineE24h: '', // 24h尿肾上腺素(μg)
          urineDA24h: '' // 24h尿多巴胺(μg)
        },
        clinicalSymptoms: {
          // 临床症状
          specificSymptoms: '' // 具体临床症状
        },
        preoperativeMedication: {
          // 术前用药
          drugName: '', // 药物名称
          drugDosage: '', // 药物剂量
          medicationDuration: '', // 用药时长
          weightChange: '', // 体重改变
          extremityTempHumidity: '', // 肢端温度、湿度
          nasalCongestion: '' // 鼻塞
        }
      }
    } // 专病评估
  }
})

// 2.4 表单验证规则
const formRules = {
  patientId: [{ required: false, message: '请输入患者ID', trigger: 'blur' }]
}

// 3.2 AI分析方法
const handleAIAnalysis = async () => {
  // 3.2.1 参数验证
  if (!queryParams.patientId) {
    message.warning('请输入患者ID')
    return
  }

  // 3.2.2 设置加载状态
  formState.loading = true

  try {
    // 3.2.3 调用AI分析API
    evaluateApi
      .aiAnalysis(queryParams.patientId)
      .then((res: any) => {
        if (res.success) {
          patientData.value = res.data || {}
        }
      })
      .finally(() => {
        formState.loading = false
      })
  } catch (error) {
    console.error('AI分析失败:', error)
    message.error('AI分析失败，请重试')
  } finally {
    // 3.2.5 重置加载状态
    formState.loading = false
  }
}

// 3.3 表单提交方法
const handleSubmit = async () => {
  // 3.3.1 数据验证
  if (!patientData.value) {
    message.warning('请先查询患者信息')
    return
  }

  // 3.3.2 设置提交状态
  formState.submitting = true

  try {
    // 验证基本信息表单
    // const basicInfoValidation = basicInfoFormRef.value?.validateForm()
    // if (!basicInfoValidation?.valid) {
    //   message.error(basicInfoValidation?.message || '基本信息验证失败')
    //   return
    // }
    // // 验证一般评估表单
    // const generalAssessmentValidation = generalAssessmentFormRef.value?.validateForm()
    // if (!generalAssessmentValidation?.valid) {
    //   message.error(generalAssessmentValidation?.message || '一般评估验证失败')
    //   return
    // }

    // // 验证个人史表单
    // const personalHistoryValidation = personalHistoryFormRef.value?.validateForm()
    // if (!personalHistoryValidation?.isValid) {
    //   message.error(`个人史信息验证失败：${personalHistoryValidation.errors.join('，')}`)
    //   return
    // }

    // // 验证气道评估表单
    // const airwayAssessmentValidation = airwayAssessmentFormRef.value?.validateForm()
    // if (!airwayAssessmentValidation?.isValid) {
    //   message.error(`气道评估信息验证失败：${airwayAssessmentValidation.errors.join('，')}`)
    //   return
    // }

    // // 验证辅助检查表单
    // const auxiliaryExaminationValid = await auxiliaryExaminationFormRef.value?.validateForm()
    // if (!auxiliaryExaminationValid?.isValid) {
    //   message.error('请完善辅助检查信息')
    //   return
    // }

    // // 验证器官系统评估表单
    // const organSystemAssessmentValidation = organSystemAssessmentFormRef.value?.validateForm()
    // if (!organSystemAssessmentValidation?.isValid) {
    //   message.error(
    //     `器官系统评估信息验证失败：${organSystemAssessmentValidation.errors.join('，')}`
    //   )
    //   return
    // }

    // // 验证专病评估表单
    // const specialDiseaseAssessmentValidation = specialDiseaseAssessmentForm.value?.validateForm()
    // if (!specialDiseaseAssessmentValidation?.isValid) {
    //   message.error(`专病评估信息验证失败：${specialDiseaseAssessmentValidation.errors.join('，')}`)
    //   return
    // }

    // 打印出大表单
    console.log(patientData.value, '大表单')

    // 3.3.3 调用评估提交API
    const response: ApiResponse<any> = await evaluateApi.submitEvaluation(patientData.value)

    // 3.3.4 处理提交结果
    if (response.success) {
      message.success('评估单提交成功')
      // 3.3.5 可选：重置表单或跳转页面
    } else {
      message.error(response.message || '提交失败')
    }
  } catch (error) {
    console.error('提交评估单失败:', error)
    message.error('提交失败，请重试')
  } finally {
    // 3.3.6 重置提交状态
    formState.submitting = false
  }
}

// 3.7 计算GCS总分方法
const calculateGCSTotal = () => {
  if (!patientData.value) return 0

  const eyeResponse =
    parseInt(patientData.value.result.generalAssessment.gcsScore.eyeResponse?.content) || 0
  const verbalResponse =
    parseInt(patientData.value.result.generalAssessment.gcsScore.verbalResponse?.content) || 0
  const motorResponse =
    parseInt(patientData.value.result.generalAssessment.gcsScore.motorResponse?.content) || 0
  const total = eyeResponse + verbalResponse + motorResponse

  // 同时更新total字段
  patientData.value.result.generalAssessment.gcsScore.total = total.toString()

  return total
}
</script>

<template>
  <ContentBlock>
    <div class="assessment-container">
      <!-- 患者信息查询区域 -->
      <div class="query-section">
        <a-card title="患者信息查询" class="query-card">
          <a-form :model="queryParams" :rules="formRules" layout="horizontal">
            <a-row :gutter="16">
              <a-col :span="12">
                <!--患者ID输入 -->
                <a-form-item label="患者ID" name="patientId">
                  <a-input
                    v-model:value="queryParams.patientId"
                    placeholder="请输入患者ID"
                    :disabled="formState.loading"
                    allow-clear
                  />
                </a-form-item>
              </a-col>
              <a-col :span="8">
                <!-- 操作按钮组 -->
                <a-form-item>
                  <!-- AI分析按钮 -->
                  <a-button
                    type="primary"
                    ghost
                    @click="handleAIAnalysis"
                    :loading="formState.loading"
                  >
                    <template #icon>
                      <RobotOutlined />
                    </template>
                    AI分析
                  </a-button>
                </a-form-item>
              </a-col>
            </a-row>
          </a-form>
        </a-card>
      </div>

      <!-- 患者基本信息展示区域 -->
      <div v-if="patientData.patientInfo" class="patient-info-section">
        <a-card title="患者信息" class="patient-info-card">
          <!-- 6.1 顶部状态信息 -->
          <template #extra>
            <div class="status-badges">
              <a-tag color="blue">ID: {{ patientData.patientInfo?.caseNo || '2024001234' }}</a-tag>
              <a-tag color="green">状态: 待评估</a-tag>
            </div>
          </template>

          <!-- 患者基本信息行 -->
          <a-row :gutter="16" class="patient-basic-info">
            <!-- 患者基本信息组合显示 -->
            <a-col :span="6">
              <div class="info-item-combined">
                <UserOutlined class="info-icon" />
                <span class="info-text">
                  {{ patientData.patientInfo.patientName }} | {{ patientData.patientInfo.sex }} |
                  {{ patientData.patientInfo.age }}岁
                </span>
              </div>
            </a-col>

            <!-- 拟行手术 -->
            <a-col :span="6">
              <div class="info-item-combined">
                <MedicineBoxOutlined class="info-icon" />
                <span class="info-text">
                  {{ patientData.result?.基本信息?.plannedSurgery || '腹腔镜胆囊切除术' }}
                </span>
              </div>
            </a-col>

            <!-- 手术日期 -->
            <a-col :span="6">
              <div class="info-item-combined">
                <CalendarOutlined class="info-icon" />
                <span class="info-text"> 手术日期：2024-01-15 </span>
              </div>
            </a-col>

            <!-- 更新时间 -->
            <a-col :span="6">
              <div class="info-item-combined">
                <ClockCircleOutlined class="info-icon" />
                <span class="info-text"> 更新时间：2024-01-10 </span>
              </div>
            </a-col>
          </a-row>

          <a-divider />
        </a-card>
      </div>

      <!-- 评估表单区域 -->
      <div class="form-section">
        <a-form layout="vertical">
          <!-- 1. 基本信息模块 -->
          <BasicInfoForm v-model:patient-data="patientData" ref="basicInfoFormRef" />

          <!-- 2 一般情况评估模块 -->
          <GeneralAssessmentForm
            v-model:patient-data="patientData"
            ref="generalAssessmentFormRef"
          />

          <!-- 3 个人史模块 -->
          <PersonalHistoryForm
            v-model:personal-history-data="patientData.result.personalHistory"
            ref="personalHistoryFormRef"
          />

          <!-- 4 气道评估模块 -->
          <AirwayAssessmentForm
            v-model:airway-assessment-data="patientData.result.airwayAssessment"
            ref="airwayAssessmentFormRef"
          />

          <!-- 5 辅助检查模块 -->
          <AuxiliaryExaminationForm
            v-model:auxiliary-examination-data="patientData.result.auxiliaryExamination"
            ref="auxiliaryExaminationFormRef"
          />

          <!-- 6 器官系统评估 -->
          <OrganSystemAssessmentForm
            v-model:organ-system-assessment-data="patientData.result.organSystemAssessment"
            ref="organSystemAssessmentFormRef"
          />

          <!-- 7 专病评估 -->
          <SpecialDiseaseAssessmentForm
            v-model:special-disease-assessment-data="patientData.result.specialDiseaseAssessment"
            ref="specialDiseaseAssessmentFormRef"
          />
        </a-form>
      </div>

      <!-- 8. 操作按钮区域 -->
      <div v-if="patientData.patientInfo" class="action-section">
        <a-card class="action-card">
          <a-space size="large">
            <!-- 8.1 主要操作按钮 -->
            <a-button
              type="primary"
              size="large"
              @click="handleSubmit"
              :loading="formState.submitting"
            >
              确认提交评估单
            </a-button>
          </a-space>
        </a-card>
      </div>
    </div>
  </ContentBlock>
</template>

<style lang="scss" scoped>
/* 9. 样式定义 */
/* 9.1 容器样式 */
.assessment-container {
  //   padding: 20px;
  //   background-color: #f5f5f5;
  //   min-height: 100vh;
}

/* 意识状态子项分组样式 */
.consciousness-sub-group {
  background-color: #f5f5f5;
  padding: 16px;
  margin: 16px 0;
  border-radius: 6px;
  border-left: 3px solid #1890ff;
}

/* 子标题样式 */
.sub-section-title {
  font-weight: 600;
  /* color: #1890ff; */
  margin-bottom: 12px;
  font-size: 14px;
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

/* 9.2 页面标题样式 */
.page-header {
  text-align: center;
  margin-bottom: 24px;
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 8px;
  color: white;
}

.page-title {
  margin: 0;
  font-size: 28px;
  font-weight: bold;
}

.page-subtitle {
  margin-top: 8px;
  font-size: 14px;
  opacity: 0.9;
}

/* 9.3 卡片样式 */
.query-card,
.patient-info-card,
.form-card,
.action-card {
  margin-bottom: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* 9.4 患者信息样式 */
.info-item {
  padding: 8px 0;
}

.info-label {
  font-weight: 600;
  color: #666;
}

.info-value {
  color: #333;
  margin-left: 4px;
}

/* 9.5 表单区域样式 */
.form-section {
  margin-top: 16px;
}

/* 9.6 操作按钮区域样式 */
.action-section {
  margin-top: 24px;
  text-align: center;
}

.action-card {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  border: none;
}

.action-card :deep(.ant-card-body) {
  padding: 24px;
}

/* 9.7 响应式样式 */
@media (max-width: 768px) {
  .assessment-container {
    padding: 12px;
  }

  .page-title {
    font-size: 24px;
  }

  .query-card,
  .patient-info-card,
  .form-card {
    margin-bottom: 12px;
  }
}

/* 9.8 加载状态样式 */
.ant-spin-container {
  min-height: 200px;
}

/* 9.9 表单项样式优化 */
:deep(.ant-form-item-label) {
  font-weight: 600;
}

:deep(.ant-input),
:deep(.ant-select),
:deep(.ant-textarea) {
  border-radius: 6px;
}

:deep(.ant-btn) {
  border-radius: 6px;
}

/* 一级标题样式 - 基于主色调 rgb(22, 119, 255) */
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

/* 一级标题图标 - 使用ant-design图标 */
:deep(.ant-card-head-title .anticon) {
  font-size: 16px;
  color: rgb(22, 119, 255);
  -webkit-text-fill-color: rgb(22, 119, 255);
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
  //   transform: translateY(-1px);
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
</style>
