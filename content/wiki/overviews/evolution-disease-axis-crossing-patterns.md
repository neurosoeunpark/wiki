---
title: "Evolution × Disease 두 축의 교차 패턴들 — 분류가 아니라 읽기 보조"
type: overview
created: 2026-05-10
category: overviews
tags: [overview, evolution, disease, NDD, brain-development, NOTCH2NL, ASPM, FZD8, HARE5, mTOR, Wnt, neoteny, oRGC, SRGAP2C, ARHGAP11B, soft-framing]
papers:
  - brain-development/zhou-2023-genetics-of-human-brain-development
  - brain-development/liu-2025-human-specific-enhancer-fine
  - brain-development/kanton-2019-organoid-single-cell-genomic
  - brain-development/taverna-2014-cell-biology-of-neurogenesis
  - brain-atlas/braun-2023-comprehensive-cell-atlas-first
  - other/klingler-2022-mapping-molecular-cellular-complexity
  - other/lancaster-2013-cerebral-organoids-model-human
  - neuroscience/parenti-2020-neurodevelopmental-disorders-from-genetics-to
  - neuroscience/dvir-2026-complex-genotype-phenotype-relationships-in
  - neuroscience/paulsen-2022-autism-genes-converge
  - neuroscience/gordon-2026-developmental-convergence-and-divergence
  - neuroscience/emani-2024-single-cell-genomics-and-regulatory
  - neuroscience/fernandez-garcia-2026-transcriptomic-and-phenotypic-convergence
  - genomic-dl/zemke-2023-conserved-and-divergent-gene
---

## Why this overview exists

**Zhou, Song, Ming 2023** (Nat Rev Genet) 는 Table 1에서 ~30개의 *human-specific evolutionary feature* 유전자와 ~25개의 *disease-causing variants modelled in hPSC* 유전자를 두 블록으로 나란히 둔다. 이 형식적 선택의 메시지는 **"인간 진화가 더 큰 뇌를 만들기 위해 위로 튜닝한 회로들 = 인간 질병이 그 회로 어딘가가 망가졌을 때 나타나는 회로들"** — 양 축이 같은 substrate를 본다는 주장이다.

두 축이 만나는 형태는 단일하지 않다. 같은 유전자가 양쪽에 박히는 깨끗한 경우 (NOTCH2NL) 도 있고, 같은 회로의 다른 component에서 만나는 경우 (FZD8 ↔ TCF4) 도 있고, 회로도 유전자도 공유하지 않고 process 수준에서 만나는 경우도 있다. 이 overview는 그 *여러 강도의 패턴*을 정리한다 — 하나의 분류 체계로 닫기보다, 새 paper를 읽을 때 어느 패턴에 가깝게 보이는지 가늠할 수 있는 reference로.

> 이 overview는 Zhou 2023 본문 + Table 1을 mechanism 정합성 기준으로 다시 읽었을 때 노출되는 결을 정리한 interpretive scaffold다.

---

## 큰 그림 한 줄

인간 진화가 위로 튜닝한 회로들과 인간 질병이 망가뜨리는 회로들은 substrate가 같다. **단, "동일성"은 반드시 *같은 유전자*를 통해야 하는 게 아니다** — 같은 dial / 같은 pathway / 같은 process / 같은 emergent property 어느 수준에서든 성립할 수 있다.

이 overview의 나머지는 그 "어느 수준"이 실제로 어떻게 나타나는지의 *예시 묶음*이다.

---

## 패턴 1 — 같은 유전자가 양쪽에 (dosage corridor 형태)

**NOTCH2NL** 가 가장 깨끗한 사례.
- 진화 측: 인간 특이적 *gene duplication* (1q21.1), Notch 신호 ↑, 신경발생 기간 연장, 피질 확장 — Fiddes 2018 + Suzuki 2018 Cell에서 확립.
- 질병 측: 같은 1q21.1 locus의 *deletion* → microcephaly + schizophrenia, *추가 duplication* → macrocephaly + autism.

같은 다이얼, "정상 = 인간 baseline", 양쪽 끝이 disease — 분야의 교과서적 idealisation. **DUF1220 / NBPF**도 비슷하게 인간에서 사본 수가 증가했고 1q21.1 syndrome에 연관된다.

**Caveat**: 이 깨끗한 형태는 사실 드물다. NOTCH2NL이 자주 인용되는 건 *통계적 흔함*이 아니라 *서사적 깨끗함* 때문이다.

---

## 패턴 2 — 같은 유전자가 양쪽에 (작동/비작동의 비대칭)

**ASPM, CDK5RAP2, MCPH1** 같은 microcephaly 원인 유전자들은 *동시에* 영장류 lineage에서 positive selection 흔적이 잡힌다 (Zhou 2023 Table 1: "may be associated with primate brain expansion" 표시).

- 진화 측: 영장류에서 양성선택, 영장류 뇌 확장에 *기여 추정*.
- 질병 측: loss-of-function → primary microcephaly.

여기서는 dial이 양방향이 아니라 *한쪽으로만* — 진화는 이 유전자를 *중요한 위치에* 놓았고, 질병은 그 위치가 비었을 때 나타난다. Mechanism이 패턴 1과 다르다 ("사본 수 = 표현형 강도"가 아니라 "활성 = 정상 / 활성 없음 = 질병").

**Caveat**: 이 패턴의 미묘함은 "진화는 이 유전자를 *어떻게* 튜닝했는가"가 정확히 잡히지 않는다는 점이다. *positively selected*라는 시그널 자체는 강하지만 정확한 mechanism이 *gain*인지 *retention*인지는 케이스마다 다르다.

---

## 패턴 3 — 다른 유전자가 같은 회로에 (pathway-level)

가장 흔하고, 가장 풍부한 패턴. **진화는 보통 cis-regulatory 미세조정을 선호하고 (HAR enhancer가 receptor·effector 발현을 살짝 올리는 식), 질병은 coding 변이가 더 흔하다.** 그래서 같은 회로의 *다른 위치*에 진화-측·질병-측 유전자가 따로 박혀 있는 경우가 많다.

| 회로 | 진화 측 (대체로 cis-reg) | 질병 측 (대체로 coding) |
|---|---|---|
| **Wnt** | FZD8 (HARE5 enhancer 강화 — receptor 측) | TCF4 (Pitt–Hopkins, downstream TF), DVL1/DVL2/VANGL2 (NTD epistasis, cytoplasmic effector), CTNNB1 |
| **mTOR** | INSR / ITGB8 / CROCCP2 (인간 특이적 mTOR booster) | PTEN (loss → macrocephaly), TSC2 (TSC), mTOR-관련 focal cortical dysplasia |
| **Rho-GTPase / cytoskeleton** | SRGAP2C (인간 특이적 RhoGAP duplication) | RHOA (focal cortical dysplasia), NF1/CRLF3 (RAS-Rho 회로) |
| **Synapse remodelling** | CBLN2 / EPHA7 / OSTN / PLXNA1 / SRGAP2C (spine density·dendrite 강화) | SHANK3 (Phelan–McDermid), CACNA1C (Timothy), FMR1, MECP2, UBE3A, DGCR8 (synaptopathy) |

**Caveat 1**: "진화는 cis-reg / 질병은 coding" 은 통계적 경향이지 법칙이 아니다. NOTCH2NL은 진화 측에서도 coding (gene duplication)이고, FOXP2는 진화 측에서 coding adaptation으로 인용되어 왔다 (단 ancestral genome panel 확장으로 contested됨).

**Caveat 2**: Wnt 행은 사용자와의 대화에서 핵심 catch였다 — *"FZD8이 양 축에 등장한다"는 framing은 부정확*하다. 진화 측에 박힌 건 FZD8이고, 질병 측에 박힌 건 *Wnt 회로의 다른 component들*이다. 두 축이 만나는 건 *유전자 수준이 아니라 회로 수준*.

---

## 패턴 4 — 회로도 유전자도 공유 안 함 (process-level, emergent property)

이 패턴에서는 *같은 유전자도 같은 pathway도 공유하지 않는다*. 두 축이 만나는 건 *현상* 수준 — "시간을 늘리는 능력", "특정 progenitor를 더 만드는 능력" 같은 emergent property.

- **Neoteny** (protracted maturation):
  - 진화 측: GADD45G / GATA3 / MEF2A / NPAS3 등이 maturation timing 연장 (각각 다른 mechanism)
  - 질병 측: cell-cycle / chromatin 결손이 maturation 비대칭으로 나타나는 다양한 syndrome (mTOR 과활성, BAF complex 결손 등)
- **oRGC amplification**:
  - 진화 측: ARHGAP11B / TBC1D3 / TKTL1 / TMEM14B (각각 독립적 mechanism, 일부는 mitochondrial / 일부는 cell cycle / 일부는 metabolic)
  - 질병 측: 진화 측 유전자 자체의 disease는 적지만, 같은 amplification process가 mTOR-관련 질병에서 hyperactivate

**Caveat**: 패턴 4는 다른 패턴들보다 evidence 무게가 약하다. 정확한 mechanism이 잡히지 않을 때 "process-level convergence"가 일종의 placeholder 역할을 할 수 있어서, 다른 패턴들과 같은 강도로 다루지 않는 게 안전하다.

---

## 경계가 흐릿한 사례들

같은 유전자/사례가 여러 패턴에 동시에 걸친다:

- **NOTCH2NL** 은 패턴 1 (dosage corridor) 로도 패턴 3 (Notch pathway 측 cis-reg / coding) 으로도 읽힌다.
- **SRGAP2C** 는 패턴 3 (Rho-GTPase) 와 (synapse remodelling) 두 회로 모두에 등장한다.
- **ASPM** 은 패턴 2 (tuned-then-vulnerable) 로 두었지만, 진화 측에서 cell cycle / centrosome 회로의 다른 microcephaly 유전자들과 같이 보면 패턴 3으로도 읽힌다.

이 multiple-membership은 회로 자체가 multi-scale로 박혀 있다는 reflection이다 — 같은 mechanism이 single gene 수준에서도, pathway 수준에서도, process 수준에서도 동시에 작동할 수 있다는 뜻. 패턴은 reference이지 mutually exclusive bucket이 아니다.

---

## 왜 이 distinction이 (실용적으로) 도움이 되는가

분류 체계는 아니지만, *어느 패턴에 가깝게 보이는가*는 다음 세 가지에서 갈래길을 만든다:

### 1. 연구 전략 — evidence를 어디로 hop 하는가
- **패턴 1·2** (같은 유전자 양쪽) → 진화-유전자 명단과 질병-유전자 명단을 *직접* cross-reference. ASPM이 microcephaly 명단에 있으니 영장류 비교유전체학에서 양성선택 검증.
- **패턴 3** (회로-수준) → 진화 유전자를 *pathway*로 매핑한 뒤 그 pathway의 질병 유전자로 hop. FZD8 → Wnt → TCF4 / DVL.
- **패턴 4** (process-수준) → 직접 cross-ref 어려움. *현상 수준* readout (timing assay, oRGC ratio assay) 으로 비교.

### 2. hPSC organoid testability
- **패턴 1·2** → 같은 유전자를 KO/OE 양방향 테스트가 곧 진화 + 질병 시뮬레이션.
- **패턴 3** → pathway 양 단(receptor/TF/effector)에서 perturbation 후 phenotype 수렴/divergence 비교. Lancaster 2013, Paulsen 2022, Gordon 2026의 방식.
- **패턴 4** → process-level readout만 가능. 진화 측 유전자의 organoid에서 timing이 길어지는지, 질병 측 유전자의 organoid에서 같은 timing이 망가지는지를 *동일한 readout*에서 비교.

### 3. evidence 강도 평가
- **패턴 1·2** → single-gene mechanism이 직접 연결. 강한 evidence.
- **패턴 3** → pathway가 같다는 것은 *회로 수준 unification*이지만 진화 component와 질병 component가 같은 cell/time/context에서 작동하는지는 추가 증명 필요.
- **패턴 4** → 가장 약한 evidence. 해석상 유연함이 함정. 다른 mechanism이 같은 process를 만들 수 있다는 것을 *서로의 evidence로 인정하면 안 된다*.

---

## Anchor papers in this wiki

### 양 축 통합 review
- [[brain-development/zhou-2023-genetics-of-human-brain-development]] — **Foundational anchor**. Song & Ming, UPenn. Table 1의 두 블록이 본 overview의 출발점.
- [[other/klingler-2022-mapping-molecular-cellular-complexity]] — 질병 측 (cortical malformation) 의 mechanism 종합.

### 진화 측
- [[brain-development/liu-2025-human-specific-enhancer-fine]] — HARE5 / FZD8의 modern follow-up (Boyd 2015 원본의 후속). 패턴 3의 Wnt 행 진화-측 핵심.
- [[brain-development/kanton-2019-organoid-single-cell-genomic]] — human/chimp/macaque organoid scRNA, neoteny의 정량 evidence. 패턴 4 측.
- [[genomic-dl/zemke-2023-conserved-and-divergent-gene]] — cross-species CRE 진화. **80% of human-specific CREs are TE-derived** — 패턴 3의 cis-reg 미세조정 명제의 통계적 뒷받침.
- [[brain-atlas/braun-2023-comprehensive-cell-atlas-first]] — first-trimester human brain reference, 진화·질병 양쪽이 만나는 시기의 atlas.
- [[brain-development/taverna-2014-cell-biology-of-neurogenesis]] — NE→RG→oRG/IPC 세포생물학 review, oRGC amplification (패턴 4) 의 substrate.

### 질병 측
- [[neuroscience/parenti-2020-neurodevelopmental-disorders-from-genetics-to]] — NDD 3-pathway convergence (mTOR + chromatin + synaptic). 패턴 3과 직접 정합 — 진화 측 mTOR booster (ITGB8 등) 와 만나는 disease 측 회로.
- [[neuroscience/dvir-2026-complex-genotype-phenotype-relationships-in]] — 같은 유전자 → 다른 표현형. 패턴 1·2 의 *깨끗함*이 일반적이지 않음을 보여주는 자매 review.
- [[neuroscience/paulsen-2022-autism-genes-converge]] — 3 ASD risk gene (SUV420H1, ARID1B, CHD8) isogenic CRISPR organoid. 패턴 3 (chromatin 회로 측 disease component).
- [[neuroscience/gordon-2026-developmental-convergence-and-divergence]] — 70 patient-derived hiPSC lines, 8 ASD mutations. 패턴 3 (M5 chromatin/TF complex이 upstream driver).
- [[neuroscience/emani-2024-single-cell-genomics-and-regulatory]] — PsychENCODE2, 388 PFC × cell-type GRN. 질병 측 evidence를 cell-type resolution으로 제공.
- [[neuroscience/fernandez-garcia-2026-transcriptomic-and-phenotypic-convergence]] — 23 NDD chromatin/regulatory pooled CRISPR + zebrafish drug rescue. 패턴 3의 closure 사례.

### 다른 overview와의 관계

**"같은 toolkit, 다른 axis" 삼부작** — 본 overview는 다음 두 자매와 함께 "발달 toolkit이 multi-purpose system"이라는 더 큰 frame을 이루는 한 축이다. 셋 다 axis만 다를 뿐 같은 통찰의 다른 face:

- 본 overview = **진화 × 질병** axis (역사 axis, Zhou 2023 anchor)
- [[overviews/molecular-reuse-dev-plasticity]] = **발달 × 성체 plasticity** axis (시간 axis, Bavelier/Hensch/Pizzorusso/Park&Poo cluster)
- [[overviews/cancer-development-thesis]] = **정상 발달 × cancer hijack** axis (조직/시점 axis, Bhaduri/Couturier/Wang/Lui/Suvà/Tilot cluster)

세 overview에서 같은 유전자가 반복 등장하는 건 (PTEN, NOTCH2NL, mTOR pathway 등) redundancy가 아니라 frame의 prediction이다.

**그 외 관련 overview**:
- [[overviews/convergent-regulation-across-systems]] — *수렴* 측면. 본 overview의 질병 측이 거기와 겹친다.
- [[overviews/convergence-heterogeneity-cascade-frame]] — NDD heterogeneity의 cascade frame. 패턴 1·2가 깨끗하지 않은 *왜*에 답하는 자매.
- [[overviews/transcriptional-heterogeneity-as-developmental-mechanism]] — heterogeneity가 mechanism. 패턴 4 측.
- [[overviews/cell-identity-programs-and-trajectories]] — 발달 cell identity. 패턴 4의 process-level readout이 어디서 측정 가능한지.

---

## Suggested papers to ingest (검색 결과, 2026-05-10)

본 overview의 thesis가 더 두꺼워지려면 다음 논문들이 wiki에 들어오면 좋다. 우선순위 표시:

### 🔴 Critical — 진화 측 anchor가 비어 있음

**Pollen, Kilik, Lowe, Camp 2023, *"Human-specific genetics: new tools to explore the molecular and cellular basis of human evolution"*** — Nat Rev Genet 24:687–711, DOI: 10.1038/s41576-022-00568-4. **Zhou 2023의 진화-측 자매 review**. Zhou가 *evolution + disease* 두 축을 함께 본다면 Pollen은 *evolution* 측만 깊이 들어간다. Comparative genomics + cell atlas + organoid를 어떻게 통합하는지에 대한 cite-everything reference. **현재 wiki에 진화-측 review가 없는 가장 큰 구멍**. → `brain-development` 또는 `other`.

**Sousa, Meyer, Santpere, Gulden, Sestan 2017, *"Evolution of the Human Nervous System Function, Structure, and Development"*** — Cell 170:226–247. Sestan-lab의 evolution review classic. Zhou 2023의 ref 7. 본 overview의 패턴 3 + 4의 substrate를 깔아주는 종합 reference. → `brain-development` 또는 `other`.

### 🟠 Strong — 패턴 1·3 의 primary evidence

**Fiddes ... Haussler 2018 Cell, *"Human-Specific NOTCH2NL Genes Affect Notch Signaling and Cortical Neurogenesis"*** + **Suzuki ... Vanderhaeghen 2018 Cell (companion paper), *"Human-Specific NOTCH2NL Genes Expand Cortical Neurogenesis through Delta/Notch Regulation"*** — 두 편 동시 publication (2018-05-31). **패턴 1 (dosage corridor) 의 primary 자료**. 1q21.1 deletion → microcephaly + SCZ, duplication → macrocephaly + autism까지의 phenotype 사슬. 본 overview에서 NOTCH2NL을 가장 깨끗한 사례로 인용한 근거. → `brain-development` 또는 `neuroscience`.

**Doan, Bae, ... Walsh 2016 Cell, *"Mutations in Human Accelerated Regions Disrupt Cognition and Social Behavior"*** — Walsh lab. **패턴 3 (HAR-mediated cis-reg가 ASD risk) 의 가장 직접적인 evidence**. SSC consortium의 SSC ASD 사례에서 rare HAR-containing CNVs + biallelic HAR mutations 분석. CUX1, PTBP2, GPC4, CDKL5 등의 HAR enhancer 변이가 ASD risk. **진화 axis (HAR) 와 disease axis (ASD) 가 같은 sequence element에서 만나는 사례** — 본 overview의 thesis가 가장 강하게 검증되는 패턴. → `neuroscience`.

**Boyd ... Silver 2015 Curr Biol, *"Human-Chimpanzee Differences in a FZD8 Enhancer Alter Cell-Cycle Dynamics in the Developing Neocortex"*** — HARE5 / FZD8의 *원본* paper. 현재 wiki는 `liu-2025`만 있음 (modern follow-up). 본 overview에서 FZD8을 패턴 3의 anchor로 사용하는데, 그 anchor의 origin paper가 빠진 상태. → `brain-development`.

### 🟡 Useful — 질병 측 anchor 보강

**Gandal, Haney, Parikshak, ... Geschwind 2018 Science, *"Shared molecular neuropathology across major psychiatric disorders parallels polygenic overlap"*** — 5 disorders (ASD, SCZ, BPD, MDD, AAD) × 700 cortical samples transcriptomic shared signature. **Geschwind lab convergence framework의 cite-everything reference**. Gordon 2026 / Paulsen 2022가 in vitro로 mirror하는 in vivo 원본. → `neuroscience`.

**Sullivan & Geschwind 2019 Cell, *"Defining the genetic, genomic, cellular, and diagnostic architectures of psychiatric disorders"*** — Zhou 2023의 ref 11. 질병 측 architecture review. Gandal 2018과 짝. → `neuroscience`.

### 추가 검색이 도움될 후보
- **NOTCH2NL Fiddes/Suzuki 2018** 후속 (Eichler lab의 2025-2026 paralog evolution 연구) — 패턴 1의 mechanism deepening
- **mTOR pathway evolution** review (인간 특이적 mTOR 활성에 대한 separate review) — 패턴 3 mTOR 행이 현재 단일 paper anchor 없음
- **Doan 2016 후속** (HAR + NDD mechanistic follow-up 2020년 이후) — 패턴 3의 HAR 측 deepening

---

## Closing note

이 overview는 진화·질병 두 축의 교차를 어떻게 사고할지에 대한 reference다. NOTCH2NL 같은 single-gene 수렴이 가장 깨끗한 사례지만 흔하지 않고, 두 축이 만나는 강도와 위치 (유전자/회로/process) 는 case마다 다르다.

Reader가 새 paper를 만났을 때 이 overview가 해줄 일은 *"이 paper의 evolution-disease bridge는 어느 패턴에 가까운가? evidence 강도는 어느 정도인가?"* 같은 질문을 떠올리는 것이다.
