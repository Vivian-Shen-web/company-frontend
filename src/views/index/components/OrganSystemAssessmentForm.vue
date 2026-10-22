<template>
  <a-card class="form-card">
    <template #title>
      <SearchOutlined />
      6 器官系统评估
    </template>

    <!-- 6.1 心血管系统 -->
    <div class="sub-section-title">
      <ExperimentOutlined />
      6.1 心血管系统
    </div>

    <!-- 6.1.1 高血压 -->
    <div class="consciousness-sub-group">
      <div class="sub-section-title plain-style">6.1.1 高血压</div>
      <a-row :gutter="16">
        <a-col :span="6">
          <a-form-item label="患病时长">
            <a-input
              v-model:value="organSystemAssessmentData.cardiovascularSystem.hypertension.duration"
              placeholder="患病时长"
            />
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="最高血压">
            <a-input
              v-model:value="
                organSystemAssessmentData.cardiovascularSystem.hypertension.maxBloodPressure
              "
              placeholder="最高血压"
            />
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="近期血压">
            <a-input
              v-model:value="
                organSystemAssessmentData.cardiovascularSystem.hypertension.recentBloodPressure
              "
              placeholder="近期血压"
            />
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="用药情况">
            <a-input
              v-model:value="organSystemAssessmentData.cardiovascularSystem.hypertension.medication"
              placeholder="用药情况"
            />
          </a-form-item>
        </a-col>
      </a-row>
    </div>

    <!-- 6.1.2 冠心病 -->
    <div class="consciousness-sub-group">
      <div class="sub-section-title plain-style">6.1.2 冠心病</div>
      <a-row :gutter="16">
        <a-col :span="8">
          <a-form-item label="患病时长">
            <a-input
              v-model:value="
                organSystemAssessmentData.cardiovascularSystem.coronaryHeartDisease.duration
              "
              placeholder="患病时长"
            />
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item label="类型">
            <a-input
              v-model:value="
                organSystemAssessmentData.cardiovascularSystem.coronaryHeartDisease.type
              "
              placeholder="请输入类型"
            >
            </a-input>
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item label="受累血管">
            <a-input
              v-model:value="
                organSystemAssessmentData.cardiovascularSystem.coronaryHeartDisease.affectedVessels
              "
              placeholder="受累血管"
            />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="16">
        <a-col :span="8">
          <a-form-item label="狭窄程度">
            <a-input
              v-model:value="
                organSystemAssessmentData.cardiovascularSystem.coronaryHeartDisease.stenosisDegree
              "
              placeholder="狭窄程度"
            />
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item label="血运重建治疗情况">
            <a-input
              v-model:value="
                organSystemAssessmentData.cardiovascularSystem.coronaryHeartDisease
                  .revascularization
              "
              placeholder="血运重建治疗情况"
            />
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item label="近期症状">
            <a-input
              v-model:value="
                organSystemAssessmentData.cardiovascularSystem.coronaryHeartDisease.recentSymptoms
              "
              placeholder="近期症状"
            />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="16">
        <a-col :span="24">
          <a-form-item label="用药情况">
            <a-textarea
              v-model:value="
                organSystemAssessmentData.cardiovascularSystem.coronaryHeartDisease.medication
              "
              :rows="2"
              placeholder="详细用药情况"
            />
          </a-form-item>
        </a-col>
      </a-row>
    </div>

    <!-- 6.1.3 心律失常 -->
    <div class="consciousness-sub-group">
      <div class="sub-section-title plain-style">6.1.3 心律失常</div>
      <a-row :gutter="16">
        <a-col :span="8">
          <a-form-item label="患病时长">
            <a-input
              v-model:value="organSystemAssessmentData.cardiovascularSystem.arrhythmia.duration"
              placeholder="患病时长"
            />
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item label="类型">
            <a-input
              v-model:value="organSystemAssessmentData.cardiovascularSystem.arrhythmia.type"
              placeholder="请输入类型"
            >
            </a-input>
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item label="发作频率">
            <a-input
              v-model:value="
                organSystemAssessmentData.cardiovascularSystem.arrhythmia.attackFrequency
              "
              placeholder="发作频率"
            />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="16">
        <a-col :span="8">
          <a-form-item label="治疗经过">
            <a-input
              v-model:value="
                organSystemAssessmentData.cardiovascularSystem.arrhythmia.treatmentHistory
              "
              placeholder="治疗经过"
            />
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item label="近期症状">
            <a-input
              v-model:value="
                organSystemAssessmentData.cardiovascularSystem.arrhythmia.recentSymptoms
              "
              placeholder="近期症状"
            />
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item label="用药情况">
            <a-input
              v-model:value="organSystemAssessmentData.cardiovascularSystem.arrhythmia.medication"
              placeholder="用药情况"
            />
          </a-form-item>
        </a-col>
      </a-row>
    </div>

    <!-- 6.2 呼吸系统 -->
    <div class="sub-section-title">
      <ExperimentOutlined />
      6.2 呼吸系统
    </div>

    <!-- 6.2.1 COPD -->
    <div class="consciousness-sub-group">
      <div class="sub-section-title plain-style">6.2.1 COPD</div>
      <a-row :gutter="16">
        <a-col :span="6">
          <a-form-item label="患病时长">
            <a-input
              v-model:value="organSystemAssessmentData.respiratorySystem.copd.duration"
              placeholder="患病时长"
            />
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="严重程度">
            <a-input
              v-model:value="organSystemAssessmentData.respiratorySystem.copd.severity"
              placeholder="请输入严重程度"
            >
            </a-input>
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="肺功能评估结果">
            <a-input
              v-model:value="
                organSystemAssessmentData.respiratorySystem.copd.pulmonaryFunctionResult
              "
              placeholder="肺功能评估结果"
            />
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="近期症状">
            <a-input
              v-model:value="organSystemAssessmentData.respiratorySystem.copd.recentSymptoms"
              placeholder="近期症状"
            />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="16">
        <a-col :span="24">
          <a-form-item label="用药情况">
            <a-input
              v-model:value="organSystemAssessmentData.respiratorySystem.copd.medication"
              placeholder="用药情况"
            />
          </a-form-item>
        </a-col>
      </a-row>
    </div>

    <!-- 6.2.2 哮喘 -->
    <div class="consciousness-sub-group">
      <div class="sub-section-title plain-style">6.2.2 哮喘</div>
      <a-row :gutter="16">
        <a-col :span="6">
          <a-form-item label="患病时长">
            <a-input
              v-model:value="organSystemAssessmentData.respiratorySystem.asthma.duration"
              placeholder="患病时长"
            />
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="严重程度">
            <a-input
              v-model:value="organSystemAssessmentData.respiratorySystem.asthma.severity"
              placeholder="请输入严重程度"
            >
            </a-input>
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="肺功能评估结果">
            <a-input
              v-model:value="
                organSystemAssessmentData.respiratorySystem.asthma.pulmonaryFunctionResult
              "
              placeholder="肺功能评估结果"
            />
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="近期症状">
            <a-input
              v-model:value="organSystemAssessmentData.respiratorySystem.asthma.recentSymptoms"
              placeholder="近期症状"
            />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="16">
        <a-col :span="24">
          <a-form-item label="用药情况">
            <a-textarea
              v-model:value="organSystemAssessmentData.respiratorySystem.asthma.medication"
              :rows="2"
              placeholder="详细用药情况"
            />
          </a-form-item>
        </a-col>
      </a-row>
    </div>

    <!-- 6.3 内分泌系统 -->
    <div class="sub-section-title">
      <ExperimentOutlined />
      6.3 内分泌系统
    </div>

    <!-- 6.3.1 糖尿病 -->
    <div class="consciousness-sub-group">
      <div class="sub-section-title plain-style">6.3.1 糖尿病</div>
      <a-row :gutter="16">
        <a-col :span="8">
          <a-form-item label="患病时长">
            <a-input
              v-model:value="organSystemAssessmentData.endocrineSystem.diabetes.duration"
              placeholder="患病时长"
            />
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item label="类型">
            <a-input
              v-model:value="organSystemAssessmentData.endocrineSystem.diabetes.type"
              placeholder="请输入糖尿病类型"
            >
            </a-input>
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item label="近期血糖">
            <a-input
              v-model:value="organSystemAssessmentData.endocrineSystem.diabetes.recentBloodGlucose"
              placeholder="近期血糖"
            />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="近期糖化血红蛋白(%)">
            <a-input
              v-model:value="organSystemAssessmentData.endocrineSystem.diabetes.recentHbA1c"
              placeholder="近期糖化血红蛋白(%)"
            />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="用药情况">
            <a-input
              v-model:value="organSystemAssessmentData.endocrineSystem.diabetes.medication"
              placeholder="用药情况"
            />
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item label="糖尿病合并症">
            <a-input
              v-model:value="
                organSystemAssessmentData.endocrineSystem.diabetes.diabetesComplications
              "
              placeholder="糖尿病合并症"
            />
          </a-form-item>
        </a-col>
      </a-row>
    </div>

    <!-- 6.3.2 甲状腺功能亢进 -->
    <div class="consciousness-sub-group">
      <div class="sub-section-title plain-style">6.3.2 甲状腺功能亢进</div>
      <a-row :gutter="16">
        <a-col :span="6">
          <a-form-item label="患病时长">
            <a-input
              v-model:value="organSystemAssessmentData.endocrineSystem.hyperthyroidism.duration"
              placeholder="患病时长"
            />
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="甲状腺功能检查">
            <a-input
              v-model:value="
                organSystemAssessmentData.endocrineSystem.hyperthyroidism.recentThyroidFunction
              "
              placeholder="甲状腺功能检查"
            />
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="近期症状">
            <a-input
              v-model:value="
                organSystemAssessmentData.endocrineSystem.hyperthyroidism.recentSymptoms
              "
              placeholder="近期症状"
            />
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="用药情况">
            <a-input
              v-model:value="organSystemAssessmentData.endocrineSystem.hyperthyroidism.medication"
              placeholder="用药情况"
            />
          </a-form-item>
        </a-col>
      </a-row>
    </div>

    <!-- 6.3.3 甲状腺功能减退 -->
    <div class="consciousness-sub-group">
      <div class="sub-section-title plain-style">6.3.3 甲状腺功能减退</div>
      <a-row :gutter="16">
        <a-col :span="6">
          <a-form-item label="患病时长">
            <a-input
              v-model:value="organSystemAssessmentData.endocrineSystem.hypothyroidism.duration"
              placeholder="患病时长"
            />
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="甲状腺功能检查">
            <a-input
              v-model:value="
                organSystemAssessmentData.endocrineSystem.hypothyroidism.recentThyroidFunction
              "
              placeholder="甲状腺功能检查"
            />
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="近期症状">
            <a-input
              v-model:value="
                organSystemAssessmentData.endocrineSystem.hypothyroidism.recentSymptoms
              "
              placeholder="近期症状"
            />
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="用药情况">
            <a-input
              v-model:value="organSystemAssessmentData.endocrineSystem.hypothyroidism.medication"
              placeholder="用药情况"
            />
          </a-form-item>
        </a-col>
      </a-row>
    </div>

    <!-- 6.3.4 库欣综合征 -->
    <div class="consciousness-sub-group">
      <div class="sub-section-title plain-style">6.3.4 库欣综合征</div>
      <a-row :gutter="16">
        <a-col :span="6">
          <a-form-item label="患病时长">
            <a-input
              v-model:value="organSystemAssessmentData.endocrineSystem.cushingSyndrome.duration"
              placeholder="患病时长"
            />
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="近期皮质功能">
            <a-input
              v-model:value="
                organSystemAssessmentData.endocrineSystem.cushingSyndrome.recentThyroidFunction
              "
              placeholder="近期皮质功能"
            />
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="近期症状">
            <a-input
              v-model:value="
                organSystemAssessmentData.endocrineSystem.cushingSyndrome.recentSymptoms
              "
              placeholder="近期症状"
            />
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="重点体征">
            <a-input
              v-model:value="organSystemAssessmentData.endocrineSystem.cushingSyndrome.keySigns"
              placeholder="重点体征"
            />
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item label="用药情况">
            <a-input
              v-model:value="organSystemAssessmentData.endocrineSystem.cushingSyndrome.medication"
              placeholder="用药情况"
            />
          </a-form-item>
        </a-col>
      </a-row>
    </div>

    <!-- 6.4 消化系统 -->
    <div class="sub-section-title">
      <ExperimentOutlined />
      6.4 消化系统
    </div>

    <!-- 6.4.1 胃食管反流病 -->
    <div class="consciousness-sub-group">
      <div class="sub-section-title plain-style">6.4.1 胃食管反流病</div>
      <a-row :gutter="16">
        <a-col :span="12">
          <a-form-item label="近期症状">
            <a-input
              v-model:value="organSystemAssessmentData.digestiveSystem.gerd.recentSymptoms"
              placeholder="近期症状"
            />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="用药情况">
            <a-input
              v-model:value="organSystemAssessmentData.digestiveSystem.gerd.medication"
              placeholder="用药情况"
            />
          </a-form-item>
        </a-col>
      </a-row>
    </div>

    <!-- 6.4.2 肝炎 -->
    <div class="consciousness-sub-group">
      <div class="sub-section-title plain-style">6.4.2 肝炎</div>
      <a-row :gutter="16">
        <a-col :span="8">
          <a-form-item label="类型">
            <a-input
              v-model:value="organSystemAssessmentData.digestiveSystem.hepatitis.type"
              placeholder="请输入类型"
            >
            </a-input>
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item label="输血八项化验结果">
            <a-input
              v-model:value="
                organSystemAssessmentData.digestiveSystem.hepatitis.bloodTransfusionTests
              "
              placeholder="输血八项化验结果"
            />
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item label="用药情况">
            <a-input
              v-model:value="organSystemAssessmentData.digestiveSystem.hepatitis.medication"
              placeholder="用药情况"
            />
          </a-form-item>
        </a-col>
      </a-row>
    </div>

    <!-- 6.4.3 肝功能不全 -->
    <div class="consciousness-sub-group">
      <div class="sub-section-title plain-style">6.4.3 肝功能不全</div>
      <a-row :gutter="16">
        <a-col :span="8">
          <a-form-item
            label="近期症状
"
          >
            <a-input
              v-model:value="
                organSystemAssessmentData.digestiveSystem.hepaticInsufficiency.recentSymptoms
              "
              placeholder="近期症状
"
            />
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item
            label="肝功能化验结果
"
          >
            <a-input
              v-model:value="
                organSystemAssessmentData.digestiveSystem.hepaticInsufficiency.liverFunctionResults
              "
              placeholder="肝功能化验结果
"
            />
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item
            label="用药情况
"
          >
            <a-input
              v-model:value="
                organSystemAssessmentData.digestiveSystem.hepaticInsufficiency.medication
              "
              placeholder="用药情况
"
            />
          </a-form-item>
        </a-col>
      </a-row>
    </div>

    <!-- 6.4.4 肝硬化 -->
    <div class="consciousness-sub-group">
      <div class="sub-section-title plain-style">6.4.4 肝硬化</div>
      <a-row :gutter="16">
        <a-col :span="6">
          <a-form-item label="近期症状">
            <a-input
              v-model:value="organSystemAssessmentData.digestiveSystem.cirrhosis.recentSymptoms"
              placeholder="近期症状"
            />
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="用药情况">
            <a-input
              v-model:value="organSystemAssessmentData.digestiveSystem.cirrhosis.medication"
              placeholder="用药情况"
            />
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="食管胃底静脉曲张情况">
            <a-input
              v-model:value="organSystemAssessmentData.digestiveSystem.cirrhosis.varices"
              placeholder="请输入食管胃底静脉曲张情况"
            >
            </a-input>
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="腹水情况">
            <a-input
              v-model:value="organSystemAssessmentData.digestiveSystem.cirrhosis.ascites"
              placeholder="请输入腹水情况"
            >
            </a-input>
          </a-form-item>
        </a-col>
      </a-row>
    </div>

    <!-- 6.5 泌尿系统 -->
    <div class="sub-section-title">
      <ExperimentOutlined />
      6.5 泌尿系统
    </div>

    <!-- 6.5.1 肾功能不全 -->
    <div class="consciousness-sub-group">
      <div class="sub-section-title plain-style">6.5.1 肾功能不全</div>
      <a-row :gutter="16">
        <a-col :span="8">
          <a-form-item label="近期症状">
            <a-input
              v-model:value="
                organSystemAssessmentData.urinarySystem.renalInsufficiency.recentSymptoms
              "
              placeholder="近期症状"
            />
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item label="肾功能化验结果">
            <a-input
              v-model:value="
                organSystemAssessmentData.urinarySystem.renalInsufficiency.renalFunctionResults
              "
              placeholder="肾功能化验结果"
            />
          </a-form-item>
        </a-col>
        <a-col :span="8">
          <a-form-item label="用药情况">
            <a-input
              v-model:value="organSystemAssessmentData.urinarySystem.renalInsufficiency.medication"
              placeholder="用药情况"
            />
          </a-form-item>
        </a-col>
      </a-row>
    </div>

    <!-- 6.5.2 肾脏替代治疗 -->
    <div class="consciousness-sub-group">
      <div class="sub-section-title plain-style">6.5.2 肾脏替代治疗</div>
      <a-row :gutter="16">
        <a-col :span="6">
          <a-form-item label="患病时长">
            <a-input
              v-model:value="
                organSystemAssessmentData.urinarySystem.renalReplacementTherapy.typduratione
              "
              placeholder="患病时长"
            />
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="替代治疗方式">
            <a-select
              v-model:value="
                organSystemAssessmentData.urinarySystem.renalReplacementTherapy.replacementMethod
              "
              placeholder="请选择替代治疗方式"
            >
              <a-select-option value="血液透析">血液透析</a-select-option>
              <a-select-option value="腹膜透析">腹膜透析</a-select-option>
              <a-select-option value="血液滤过">血液滤过</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="替代治疗频率">
            <a-input
              v-model:value="
                organSystemAssessmentData.urinarySystem.renalReplacementTherapy.replacementFrequency
              "
              placeholder="替代治疗频率"
            />
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="用药情况">
            <a-input
              v-model:value="
                organSystemAssessmentData.urinarySystem.renalReplacementTherapy.medication
              "
              placeholder="用药情况"
            />
          </a-form-item>
        </a-col>
      </a-row>
    </div>

    <!-- 6.6 神经系统 -->
    <div class="sub-section-title">
      <ExperimentOutlined />
      6.6 神经系统
    </div>

    <!-- 6.4.1 脑卒中 -->
    <div class="consciousness-sub-group">
      <div class="sub-section-title plain-style">6.6.1 脑卒中</div>
      <a-row :gutter="16">
        <a-col :span="6">
          <a-form-item label="患病时长">
            <a-input
              v-model:value="organSystemAssessmentData.nervousSystem.stroke.typduratione"
              placeholder="患病时长"
            />
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="受累部位">
            <a-input
              v-model:value="organSystemAssessmentData.nervousSystem.stroke.affectedArea"
              placeholder="受累部位"
            />
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="后遗症">
            <a-input
              v-model:value="organSystemAssessmentData.nervousSystem.stroke.sequelae"
              placeholder="后遗症"
            />
          </a-form-item>
        </a-col>
        <a-col :span="6">
          <a-form-item label="用药情况">
            <a-input
              v-model:value="organSystemAssessmentData.nervousSystem.stroke.medication"
              placeholder="用药情况"
            />
          </a-form-item>
        </a-col>
      </a-row>
    </div>

    <!-- 6.6.2 阿尔茨海默病 -->
    <div class="consciousness-sub-group">
      <div class="sub-section-title plain-style">6.6.2 阿尔茨海默病</div>
      <a-row :gutter="16">
        <a-col :span="12">
          <a-form-item label="患病时长">
            <a-input
              v-model:value="organSystemAssessmentData.nervousSystem.alzheimers.typduratione"
              placeholder="患病时长"
            />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="用药情况">
            <a-input
              v-model:value="organSystemAssessmentData.nervousSystem.alzheimers.medication"
              placeholder="用药情况"
            />
          </a-form-item>
        </a-col>
      </a-row>
    </div>

    <!-- 6.6.3 帕金森病 -->
    <div class="consciousness-sub-group">
      <div class="sub-section-title plain-style">6.6.3 帕金森病</div>
      <a-row :gutter="16">
        <a-col :span="12">
          <a-form-item
            label="近期症状
"
          >
            <a-input
              v-model:value="organSystemAssessmentData.nervousSystem.parkinsons.recentSymptoms"
              placeholder="近期症状
"
            />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item
            label="用药情况
"
          >
            <a-input
              v-model:value="organSystemAssessmentData.nervousSystem.parkinsons.medication"
              placeholder="用药情况
"
            />
          </a-form-item>
        </a-col>
      </a-row>
    </div>

    <!-- 6.6.4 周围神经病 -->
    <div class="consciousness-sub-group">
      <div class="sub-section-title plain-style">6.6.4 周围神经病</div>
      <a-row :gutter="16">
        <a-col :span="12">
          <a-form-item label="近期症状">
            <a-input
              v-model:value="
                organSystemAssessmentData.nervousSystem.peripheralNeuropathy.recentSymptoms
              "
              placeholder="近期症状"
            />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="用药情况">
            <a-input
              v-model:value="
                organSystemAssessmentData.nervousSystem.peripheralNeuropathy.medication
              "
              placeholder="用药情况"
            />
          </a-form-item>
        </a-col>
      </a-row>
    </div>
  </a-card>
</template>

<script setup>
import { ref } from 'vue'
import { SearchOutlined, ExperimentOutlined } from '@ant-design/icons-vue'

const organSystemAssessmentData = defineModel('organSystemAssessmentData')

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
    console.error('器官系统评估表单验证失败:', error)
    return { isValid: false, errors: ['器官系统评估信息验证失败'] }
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
