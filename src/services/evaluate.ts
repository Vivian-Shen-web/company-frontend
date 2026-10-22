import { http } from '@/utils'

// ==================== TypeScript 接口定义 ====================

/**
 * 1. 患者基本信息
 */
export interface PatientInfo {
  patientName: string // 患者姓名
  sex: string // 性别
  age: string // 年龄
  caseNo: string // 病案号
  height: string // 身高
  weight: string // 体重
}

/**
 * 1.1 基本信息
 */
export interface BasicInfo {
  preoperativeDiagnosis: {
    extractionBasis?: string
    content?: string
  } // 术前诊断
  plannedSurgery: {
    extractionBasis?: string
    content?: string
  } // 拟行手术名称
}

/**
 * 1.2 一般情况评估
 */
export interface GeneralAssessment {
  heartRate: {
    content: string
    extractionBasis: string
  } // 心率
  bloodPressure: {
    content: string
    extractionBasis: string
  } // 血压
  spO2: {
    content: string
    extractionBasis: string
  } // 血氧饱和度
  consciousness: {
    content: string
    extractionBasis: string
  } // 意识状态
  gcsScore: {
    // GCS评分
    eyeResponse: string // 睁眼反应评分
    verbalResponse: string // 语言反应评分
    motorResponse: string // 运动反应评分
    assessmentBasis: string
    totalScore: string // 总分
  }
  rassScore: {
    content: string
    assessmentBasis: string
  } // RASS评分
  asaGrade: {
    content: string
    assessmentBasis: string
  } // ASA分级
  activityTolerance: {
    content: string
    assessmentBasis: string
  } // 活动耐量
}

/**
 * 1.3 个人史
 */
export interface PersonalHistory {
  allergyHistory: {
    // 过敏史
    hasHistory: string // 是否
    details: string // 详细描述
    extractionBasis: string
  }
  smokingHistory: {
    // 吸烟史
    hasHistory: string // 是否
    details: string // 详细描述
    extractionBasis: string
  }
  alcoholHistory: {
    // 饮酒史
    hasHistory: string // 是否
    details: string // 详细描述
    extractionBasis: string
  }
  drugAbuseHistory: {
    // 药物滥用史
    hasHistory: string // 是否
    details: string // 详细描述
    extractionBasis: string
  }
  motionSicknessHistory: {
    // 晕动病史
    hasHistory: string // 是否
    details: string // 详细描述
    extractionBasis: string
  }
  surgeryAnesthesiaHistory: {
    hasHistory: boolean // 是否有手术史
    surgeryName: string // 历次手术名称
    surgeryDate: string // 历次手术时间日期
    anesthesiaMethod: string // 历次手术麻醉方式
    ponvHistory: {
      // PONV病史
      nausea: boolean // 术后恶心
      vomiting: boolean // 术后呕吐
      noPonv: boolean // 无PONV史
    }
  }
}

/**
 * 1.4 气道评估
 */
export interface AirwayAssessment {
  mallampatiScore: {
    hasHistory: string
    extractionBasis: string
  } // Mallampati分级
  snoringOSAHS: {
    hasHistory: string
    extractionBasis: string
  } // 鼾症/OSAHS
  looseTeeth: {
    hasHistory: string
    extractionBasis: string
  } // 松动牙齿
  mouthOpening: {
    hasHistory: string
    extractionBasis: string
  } // 张口度(cm)

  cervicalSpondylosis: {
    hasHistory: string
    extractionBasis: string
  } // 颈椎病
  neckMobility: {
    hasHistory: string
    extractionBasis: string
  } // 颈椎活动度

  micrognathia: {
    hasHistory: string
    extractionBasis: string
  } // 小下颌
  upperLipBiteTest: {
    hasHistory: string
    extractionBasis: string
  } // 咬上唇试验
  thyromentalDistance: {
    hasHistory: string
    extractionBasis: string
  } // 甲颏距(cm)
}

/**
 * 1.5 辅助检查
 * 每个检查项目包含状态选择（radio group）和详细描述（textarea）
 */
export interface AuxiliaryExamination {
  // 血液检查项目
  cbc: {
    extractionBasis: string // 字段提取依据
    content: string // 字段内容
  } // 5.1 全血细胞分析

  liverFunction: {
    extractionBasis: string // 字段提取依据
    content: string // 字段内容
  } // 5.2 肝功能检查

  renalFunction: {
    extractionBasis: string // 字段提取依据
    content: string // 字段内容
  } // 5.3 肾功能检查

  coagulationFunction: {
    extractionBasis: string // 字段提取依据
    content: string // 字段内容
  } // 5.4 凝血功能检查

  // 影像学检查项目
  ecg: {
    extractionBasis: string // 字段提取依据
    content: string // 字段内容
  } // 5.5 ECG心电图检查

  ucg: {
    extractionBasis: string // 字段提取依据
    content: string // 字段内容
  } // 5.6 UCG超声心动图检查

  chestXRay: {
    extractionBasis: string // 字段提取依据
    content: string // 字段内容
  } // 5.7 胸部正侧位X线检查

  pulmonaryFunction: {
    statextractionBasisus: string // 字段提取依据
    content: string // 字段内容
  } // 5.8 肺功能检查

  arterialBloodGas: {
    extractionBasis: string // 字段提取依据
    content: string // 字段内容
  } // 5.9 动脉血气分析
}

/**
 * 1.6 器官系统评估 - 统一接口
 */
export interface OrganSystemAssessment {
  cardiovascularSystem: {
    // 心血管系统
    hypertension: {
      // 高血压
      duration: string // 患病时长
      maxBloodPressure: string // 最高血压
      recentBloodPressure: string // 近期血压
      medication: string // 用药情况
    }
    coronaryHeartDisease: {
      // 冠心病
      duration: string // 患病时长
      type: string // 类型
      affectedVessels: string // 受累血管
      stenosisDegree: string // 狭窄程度
      revascularization: string // 血运重建治疗情况
      recentSymptoms: string // 近期症状
      medication: string // 用药情况
    }
    arrhythmia: {
      // 心律失常
      duration: string // 患病时长
      type: string // 类型
      attackFrequency: string // 发作频率
      treatmentHistory: string // 治疗经过
      recentSymptoms: string // 近期症状
      medication: string // 用药情况
    }
  }
  respiratorySystem: {
    // 呼吸系统
    copd: {
      // COPD
      duration: string // 患病时长
      severity: string // 严重程度
      pulmonaryFunctionResult: string // 肺功能评估结果
      recentSymptoms: string // 近期症状
      medication: string // 用药情况
    }
    asthma: {
      // 哮喘
      duration: string // 患病时长
      severity: string // 严重程度
      pulmonaryFunctionResult: string // 肺功能评估结果
      recentSymptoms: string // 近期症状
      medication: string // 用药情况
    }
  }
  endocrineSystem: {
    // 内分泌系统
    diabetes: {
      // 糖尿病
      duration: string // 患病时长
      type: string // 类型
      recentBloodGlucose: string // 近期血糖
      recentHbA1c: string // 近期糖化血红蛋白
      medication: string // 用药情况
      diabetesComplications: string // 糖尿病合并症
    }
    hyperthyroidism: {
      // 甲状腺功能亢进
      duration: string // 患病时长
      recentThyroidFunction: string // 近期甲状腺功能
      recentSymptoms: string // 近期症状
      medication: string // 用药情况
    }
    hypothyroidism: {
      // 甲状腺功能减退
      duration: string // 患病时长
      recentThyroidFunction: string // 近期甲状腺功能
      recentSymptoms: string // 近期症状
      medication: string // 用药情况
    }
    cushingSyndrome: {
      // 库欣综合征
      duration: string // 患病时长
      recentCorticalFunction: string // 近期皮质功能
      recentSymptoms: '' //近期症状
      keySigns: '' // 重点体征
      medication: '' // 用药情况
    }
  }
  digestiveSystem: {
    // 消化系统
    gerd: {
      // 胃食管反流病
      recentSymptoms: string // 近期症状
      medication: string // 用药情况
    }
    hepatitis: {
      // 肝炎
      type: string // 类型
      bloodTransfusionTests: string // 输血八项化验结果
      medication: string // 用药情况
    }
    hepaticInsufficiency: {
      // 肝功能不全
      recentSymptoms: string // 近期症状
      liverFunctionResults: string // 肝功能化验结果
      medication: string // 用药情况
    }
    cirrhosis: {
      // 肝硬化
      recentSymptoms: string // 近期症状
      medication: string // 用药情况
      varices: '' //食管胃底静脉曲张情况
      ascites: '' // 腹水情况
    }
  }
  urinarySystem: {
    // 泌尿系统
    renalInsufficiency: {
      // 肾功能不全
      recentSymptoms: string // 近期症状
      renalFunctionResults: string // 肾功能化验结果
      medication: string // 用药情况
    }
    renalReplacementTherapy: {
      // 肾脏替代治疗
      typduratione: string // 患病时长
      replacementMethod: string // 替代治疗方式
      replacementFrequency: string // 替代治疗频率
      medication: string // 用药情况
    }
  }
  nervousSystem: {
    // 神经系统
    stroke: {
      // 脑卒中
      typduratione: string // 患病时长
      affectedArea: string // 受累部位
      sequelae: string // 后遗症
      medication: string // 用药情况
    }
    alzheimers: {
      // 阿尔茨海默病
      typduratione: string // 患病时长
      medication: string // 用药情况
    }
    parkinsons: {
      // 帕金森病
      recentSymptoms: string // 近期症状
      medication: string // 用药情况
    }
    peripheralNeuropathy: {
      // 周围神经病
      recentSymptoms: string // 近期症状
      medication: string // 用药情况
    }
  }
}

/**
 * 1.7 专病评估 - 统一接口
 */
export interface SpecialDiseaseAssessment {
  pheochromocytomaPreopAssessment: {
    // 嗜铬细胞瘤术前评估
    tumorInfo: {
      // 肿瘤情况
      location: string // 位置与侧别
      dimensions: string // 三维径线
      bloodMN: string // 血MN(pg/ml)
      bloodNMN: string // 血NMN(pg/ml)
      urineNE24h: string // 24h尿去甲肾上腺素(μg)
      urineE24h: string // 24h尿肾上腺素(μg)
      urineDA24h: string // 24h尿多巴胺(μg)
    }
    clinicalSymptoms: {
      // 临床症状
      specificSymptoms: string // 具体临床症状
    }
    preoperativeMedication: {
      // 术前用药
      drugName: string // 药物名称
      drugDosage: string // 药物剂量
      medicationDuration: string // 用药时长
      weightChange: string // 体重改变
      extremityTempHumidity: string // 肢端温度、湿度
      nasalCongestion: string // 鼻塞
    }
  }
}

/**
 * 2. 完整的患者评估数据结构
 */
export interface PatientAssessmentData {
  patientInfo: PatientInfo // 患者基本信息
  result: {
    basicInfo: BasicInfo // 基本信息
    generalAssessment: GeneralAssessment // 一般情况评估
    personalHistory: PersonalHistory // 个人史
    airwayAssessment: AirwayAssessment // 气道评估
    auxiliaryExamination: AuxiliaryExamination // 辅助检查
    organSystemAssessment: OrganSystemAssessment // 器官系统评估1
    specialDiseaseAssessment: SpecialDiseaseAssessment // 专病评估
  }
}

/**
 * 3. 查询参数接口
 */
export interface QueryParams {
  patientId?: string // 患者ID（可选）
  patientName?: string // 患者姓名（可选）
}

/**
 * 4. 表单状态接口
 */
export interface FormState {
  loading: boolean // 加载状态
  submitting: boolean // 提交状态
}

/**
 * 5. API响应接口
 */
export interface ApiResponse<T = any> {
  code: number // 响应状态码
  message: string // 响应消息
  data: T // 响应数据
  success: boolean // 是否成功
}

/**
 * 6. 管理类（保持原有结构）
 */
export class Manage {
  'userName': string = '' // 用户名
  'logDate': string = '' // 日志日期
  'status': string = '' // 状态
  'message'?: string // 消息
  'id': string = '' // ID
}

// ==================== API 接口地址常量 ====================

/**
 * 7. API 接口地址常量
 */
const aiAnalysisUrl = '/xie-he/data-ai'

// ==================== API 接口方法 ====================

/**
 * 8. API 接口包装类
 */
export const evaluateApi = {
  /**
   * 8.2 提交患者评估表单数据
   * @param data 完整的患者评估数据
   * @returns Promise<ApiResponse<any>>
   */
  submitEvaluation(data: PatientAssessmentData): Promise<ApiResponse<any>> {
    // 真实接口调用（暂时注释，调试时使用）
    // return http.post(API_ENDPOINTS.EVALUATE_PATIENT, data)

    // 模拟数据返回
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          code: 200,
          message: '评估单提交成功',
          data: {
            evaluationId: 'EVAL_' + Date.now(),
            submitTime: new Date().toISOString(),
            status: 'submitted'
          },
          success: true
        })
      }, 500)
    })
  },

  /**
   * 8.3 AI智能分析患者数据
   * @param params 查询参数
   * @returns Promise<ApiResponse<PatientAssessmentData>>
   */
  aiAnalysis(caseNo: string) {
    return http.post<PageList<Manage[]>>(aiAnalysisUrl, { caseNo })
  }
}

// ==================== 工具函数 ====================

/**
 * 9. 数据验证和工具函数
 */
export const evaluateUtils = {
  /**
   * 9.1 验证患者基本信息是否完整
   * @param patientInfo 患者信息
   * @returns boolean
   */
  validatePatientInfo(patientInfo: PatientInfo): boolean {
    return !!(patientInfo.patientName && patientInfo.sex && patientInfo.age)
  },

  /**
   * 9.2 验证查询参数是否有效
   * @param params 查询参数
   * @returns boolean
   */
  validateQueryParams(params: QueryParams): boolean {
    return !!(params.patientId || params.patientName)
  },

  /**
   * 9.3 格式化患者信息显示
   * @param patientInfo 患者信息
   * @returns string
   */
  formatPatientDisplay(patientInfo: PatientInfo): string {
    return `${patientInfo.patientName} (${patientInfo.sex}, ${patientInfo.age}岁)`
  },

  /**
   * 9.4 检查评估数据完整性
   * @param data 评估数据
   * @returns { isComplete: boolean, missingFields: string[] }
   */
  checkDataCompleteness(data: PatientAssessmentData): {
    isComplete: boolean
    missingFields: string[]
  } {
    const missingFields: string[] = []

    // 检查必填字段
    if (!data.patientInfo.patientName) missingFields.push('患者姓名')
    if (!data.result.basicInfo.preoperativeDiagnosis) missingFields.push('术前诊断')
    if (!data.result.generalAssessment.asaGrade) missingFields.push('ASA分级')

    return {
      isComplete: missingFields.length === 0,
      missingFields
    }
  },

  /**
   * 9.5 生成评估摘要
   * @param data 评估数据
   * @returns string
   */
  generateSummary(data: PatientAssessmentData): string {
    const patient = data.patientInfo
    const basic = data.result.basicInfo
    const general = data.result.generalAssessment

    return `患者${patient.patientName}，${patient.sex}，${patient.age}岁，术前诊断：${basic.preoperativeDiagnosis}，ASA分级：${general.asaGrade}`
  }
}

// ==================== 常量定义 ====================

/**
 * 10. 系统常量
 */
export const ASSESSMENT_CONSTANTS = {
  // 10.1 ASA分级选项
  ASA_GRADES: [
    { value: 'ASA I', label: 'ASA I - 正常健康患者' },
    { value: 'ASA II', label: 'ASA II - 轻度系统性疾病患者' },
    { value: 'ASA III', label: 'ASA III - 严重系统性疾病患者' },
    { value: 'ASA IV', label: 'ASA IV - 严重系统性疾病威胁生命患者' },
    { value: 'ASA V', label: 'ASA V - 濒死患者' }
  ],

  // 10.2 意识状态选项
  CONSCIOUSNESS_STATES: [
    { value: '清醒', label: '清醒' },
    { value: '谵妄', label: '谵妄' },
    { value: '嗜睡', label: '嗜睡' },
    { value: '昏迷', label: '昏迷' }
  ],

  // 10.3 活动耐量选项
  ACTIVITY_TOLERANCE: [
    { value: '1 MET', label: '1 MET' },
    { value: '2 METs', label: '2 METs' },
    { value: '3 MET', label: '3 MET' },
    { value: '≥4 METs', label: '≥4 METs' }
  ],

  // 10.4 NYHA心功能分级
  NYHA_CLASSES: [
    { value: 'I级', label: 'I级 - 无症状' },
    { value: 'II级', label: 'II级 - 轻度活动受限' },
    { value: 'III级', label: 'III级 - 明显活动受限' },
    { value: 'IV级', label: 'IV级 - 休息时有症状' }
  ],

  //GCS评分选项
  GCS_EYE_OPENING: [
    { value: '4', label: '自发睁眼(4)' },
    { value: '3', label: '呼唤睁眼(3)' },
    { value: '2', label: '疼痛睁眼(2)' },
    { value: '1', label: '无反应(1)' }
  ],

  GCS_VERBAL_RESPONSE: [
    { value: '5', label: '正确回答(5)' },
    { value: '4', label: '错误回答(4)' },
    { value: '3', label: '不当言语(3)' },
    { value: '2', label: '不理解声音(2)' },
    { value: '1', label: '无反应(1)' }
  ],

  GCS_MOTOR_RESPONSE: [
    { value: '6', label: '遵嘱动作(6)' },
    { value: '5', label: '定位疼痛(5)' },
    { value: '4', label: '屈曲逃避(4)' },
    { value: '3', label: '异常屈曲(3)' },
    { value: '2', label: '异常伸展(2)' },
    { value: '1', label: '无反应(1)' }
  ],

  // RASS评分选项
  RASS_SCORES: [
    { value: '+4', label: '好斗(+4)' },
    { value: '+3', label: '非常躁动(+3)' },
    { value: '+2', label: '躁动(+2)' },
    { value: '+1', label: '不安(+1)' },
    { value: '0', label: '警觉平静(0)' },
    { value: '-1', label: '嗜睡(-1)' },
    { value: '-2', label: '轻度镇静(-2)' },
    { value: '-3', label: '中度镇静(-3)' },
    { value: '-4', label: '深度镇静(-4)' },
    { value: '-5', label: '无法唤醒(-5)' }
  ],

  // 辅助检查状态选项
  AUXILIARY_EXAMINATION_STATUS: [
    { value: '正常', label: '正常' },
    { value: '异常', label: '异常' }
  ],

  // 心血管系统相关常量
  CORONARY_HEART_DISEASE_TYPES: [
    { value: '稳定性心绞痛', label: '稳定性心绞痛' },
    { value: '不稳定性心绞痛', label: '不稳定性心绞痛' },
    { value: '心肌梗死', label: '心肌梗死' }
  ],

  ARRHYTHMIA_TYPES: [
    { value: '房颤', label: '房颤' },
    { value: '房扑', label: '房扑' },
    { value: '室早', label: '室早' },
    { value: '房早', label: '房早' },
    { value: '传导阻滞', label: '传导阻滞' }
  ],

  VALVULAR_DISEASE_AFFECTED_VALVES: [
    { value: '二尖瓣', label: '二尖瓣' },
    { value: '主动脉瓣', label: '主动脉瓣' },
    { value: '三尖瓣', label: '三尖瓣' },
    { value: '肺动脉瓣', label: '肺动脉瓣' }
  ],

  VALVULAR_DISEASE_SEVERITY: [
    { value: '轻度', label: '轻度' },
    { value: '中度', label: '中度' },
    { value: '重度', label: '重度' }
  ],

  PERIPHERAL_ARTERIAL_DISEASE_TYPES: [
    { value: '下肢动脉硬化', label: '下肢动脉硬化' },
    { value: '颈动脉狭窄', label: '颈动脉狭窄' },
    { value: '肾动脉狭窄', label: '肾动脉狭窄' }
  ],

  HEART_FAILURE_TYPES: [
    { value: '急性心衰', label: '急性心衰' },
    { value: '慢性心衰', label: '慢性心衰' }
  ],

  KILLIP_CLASSES: [
    { value: 'I级', label: 'I级' },
    { value: 'II级', label: 'II级' },
    { value: 'III级', label: 'III级' },
    { value: 'IV级', label: 'IV级' }
  ],

  // COPD严重程度选项
  COPD_SEVERITY_LEVELS: [
    { value: '轻度', label: '轻度' },
    { value: '中度', label: '中度' },
    { value: '重度', label: '重度' },
    { value: '极重度', label: '极重度' }
  ],
  ASTHMA_SEVERITY_LEVELS: [
    { value: '间歇性', label: '间歇性' },
    { value: '轻度持续性', label: '轻度持续性' },
    { value: '中度持续性', label: '中度持续性' },
    { value: '重度持续性', label: '重度持续性' }
  ],
  // 6.3 内分泌系统常量
  DIABETES_TYPES: [
    { value: '1型糖尿病', label: '1型糖尿病' },
    { value: '2型糖尿病', label: '2型糖尿病' },
    { value: '妊娠糖尿病', label: '妊娠糖尿病' },
    { value: '其他特殊类型', label: '其他特殊类型' }
  ],

  // 6.4 消化系统常量
  HEPATITIS_TYPES: [
    { value: '甲型肝炎', label: '甲型肝炎' },
    { value: '乙型肝炎', label: '乙型肝炎' },
    { value: '丙型肝炎', label: '丙型肝炎' },
    { value: '其他', label: '其他' }
  ],

  ESOPHAGEAL_VARICES_STATUS: [
    { value: '无', label: '无' },
    { value: '轻度', label: '轻度' },
    { value: '中度', label: '中度' },
    { value: '重度', label: '重度' }
  ],

  ASCITES_STATUS: [
    { value: '无', label: '无' },
    { value: '少量', label: '少量' },
    { value: '中量', label: '中量' },
    { value: '大量', label: '大量' }
  ],

  // 6.5 泌尿系统常量
  RENAL_REPLACEMENT_THERAPY_METHODS: [
    { value: '血液透析', label: '血液透析' },
    { value: '腹膜透析', label: '腹膜透析' },
    { value: '血液滤过', label: '血液滤过' }
  ]
} as const
