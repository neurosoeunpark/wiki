---
title: "Neurotrophin regulation of neural circuit development and function"
authors: Hyungju Park, Mu-ming Poo
year: 2013
doi: 10.1038/nrn3379
category: neuroscience
pdf_path: papers/park-poo-2013-neurotrophin-regulation.pdf
pdf_filename: park-poo-2013-neurotrophin-regulation.pdf
source_collection: manual
status: stub
---

## One-line Summary
**BDNF / TrkB 등 neurotrophin이 신경 회로의 발달 (proliferation, axon guidance, synapse formation, target-derived survival) 과 성숙기 plasticity (LTP maintenance, dendritic remodeling) 에 동일한 분자 도구로 작동**한다는 통합 review — 같은 cascade가 두 시간 스케일에서 재배치되는 dev↔plasticity 재활용 thesis의 분자 골격을 제공.

## 1. Document Info
- Journal: Nature Reviews Neuroscience
- Published: 2013-01 (NRN 14(1):7–23)
- Affiliation: Park, Poo — UC Berkeley, Helen Wills Neuroscience Institute, Mol Cell Biol Division
- Type: Comprehensive review (Hans Thoenen 1928–2012 추모 헌정)

## 2. Key Contributions
- **Neurotrophin family 정리**: NGF (1950s 첫 발견), BDNF, NT-3, NT-4 — 모두 high-affinity Trk RTK + low-affinity p75NTR로 작동.
- **활성-의존 BDNF 발현 cascade**: Membrane depolarization → Ca²⁺ influx (VGCC + NMDAR) → CaRF + CREB → Bdnf 9개 promoter 중 promoter IV가 가장 activity-responsive.
- **MECP2가 Bdnf transcription의 핵심 epigenetic gate**: CaMKII가 MECP2 phosphorylation → MECP2 + HDAC1 + SIN3A complex가 promoter IV에서 release → Bdnf 전사 ↑. **Rett syndrome (MECP2 변이) 의 BDNF 결손 mechanism.**
- **분자 cascade의 dev ↔ adult dual use**:
  - 발달: target-derived BDNF → TrkB → 신경 생존 + axon guidance + synapse formation
  - 성체: postsynaptic activity-induced BDNF release → TrkB autocrine/paracrine → LTP maintenance + dendritic spine remodeling
  - 같은 분자, 다른 trigger.
- **BDNF Val66Met SNP의 임상 의미**: BDNF 분비 효율 감소 → 우울증, PTSD, 학습 장애 위험 증가. 발달 + 성체 plasticity 모두에 영향.
- **PNN ↔ TrkB 상호작용**: PTPσ가 PNN과 결합하면 TrkB을 dephosphorylate → 성체 plasticity brake. 이게 chABC가 plasticity reopen하는 분자 mechanism의 한 축.

## 3. Methods & Architecture
Comprehensive review (no original wet experiments). 250+ references organized:
1. Neurotrophin family + receptor 분류
2. Synthesis, processing, secretion (transcriptional + post-transcriptional)
3. 활성-의존 secretion mechanism
4. 발달기 회로 형성 역할 (axon outgrowth, synapse formation, survival)
5. 성체 plasticity 역할 (LTP, LTD, structural remodeling)
6. 임상 의미 (Rett, depression, PTSD, schizophrenia)

## 4. Key Results & Benchmarks
- BDNF promoter IV KI mutation → sensory experience-induced Bdnf expression 결함 → cortical inhibitory circuit 발달 결함 (Hong et al. 2008)
- MECP2 KO → Bdnf 발현 감소; Bdnf double KO → Rett 표현형 더 일찍 발병 (Chang et al. 2006)
- BDNF Val66Met carrier에서 hippocampal-dependent memory 감소, depression 위험 증가 (multiple cohort studies)
- 성체 hippocampus LTP에서 BDNF/TrkB scavenger (TrkB-Fc) → LTP maintenance 차단 (Korte 1995)
- chABC + BDNF infusion이 단독보다 plasticity reopening 효과 강함 (combined intervention)

## 5. Limitations & Future Work
- Pro-BDNF (proteolytically uncleaved form) 의 p75NTR 우선 결합 → 다른 (often opposing) effect — 이 비율 조절이 cell context-specific이라 generalize 어려움
- BDNF의 secretion이 매우 local + 짧은 range → 회로별 effect 직접 측정 어려움
- 임상 응용 (BDNF mimetic drug) 시도 많지만 BBB 통과 + specificity 문제로 진전 더딤
- 다른 neurotrophin (NT-3, NT-4) 의 역할은 BDNF만큼 풀리지 않음

## 6. Related Work
- Hensch 2005 NRN — critical period closure의 BDNF/TrkB matrix와 GABA circuit maturation 연결
- Pizzorusso 2002 Science — chABC reopening이 TrkB-PNN 상호작용을 통한다는 mechanism의 단서 제공
- Bavelier 2010 J Neurosci — 이 review의 cascade를 임상 amblyopia 회복으로 확장
- Morelli 2022 — DM1 cortical organoids에서 MECP2 pathway dysregulation (Park & Poo 2013의 MECP2-BDNF cascade와 직접 연결)
- Parenti 2020 Trends Neurosci — synaptic pathway가 NDD convergence 3축 중 하나, BDNF/TrkB 핵심 역할

## 7. Glossary
- **BDNF (Brain-Derived Neurotrophic Factor)**: 가장 발현 많고 연구 많은 neurotrophin. 회로 발달 + 성체 LTP 둘 다에서 핵심.
- **TrkB (Tropomyosin-Related Kinase B)**: BDNF + NT-4의 high-affinity RTK. 자가 phosphorylation → PI3K + MAPK + PLCγ cascade.
- **p75NTR**: 모든 neurotrophin의 low-affinity 수용체. 종종 Trk와 반대 effect (apoptosis vs survival, depending on context).
- **CREB (cAMP Response Element-Binding protein)**: BDNF promoter activation에서 핵심 transcription factor. 활성-의존 유전자 발현의 master regulator.
- **MECP2 (Methyl-CpG-Binding Protein 2)**: Methylated DNA에 결합하는 transcriptional repressor. CaMKII에 의해 phosphorylation되면 release. **MECP2 변이 = Rett syndrome.**
- **BDNF Val66Met**: BDNF 단백질 66번 아미노산 valine→methionine SNP. 분비 효율 감소 → 정신질환 위험 인자.
- **Promoter IV**: BDNF 9개 promoter 중 가장 activity-responsive (이전 nomenclature로 promoter III).
