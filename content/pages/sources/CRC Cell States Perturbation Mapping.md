---
title: "Perturbation-guided mapping of colorectal cancer cell states to causal mechanisms"
type: source
tags: [colorectal-cancer, single-cell, perturbation, cell-states, continual-learning, scRNA-seq, organoid, MAPK]
created: 2026-04-11
updated: 2026-04-11
sources: [raw/papers/2026.03.03.708171v3.full.pdf]
doi: https://doi.org/10.64898/2026.03.03.708171
---

# Perturbation-guided mapping of colorectal cancer cell states to causal mechanisms

**저자**: Hediyeh-zadeh, Toh, Dufva, Serra et al. | 교신: Theis & Garnett
**출판**: bioRxiv preprint, 2026-03-24

---

## 핵심 방법론 (Methods)

[[Continual Learning for scRNA-seq|Continual Learning]] (EWC + Experience Replay) 기반 cVAE로 CRC 비교 아틀라스 구축 → Relative Representations + Energy Distance로 perturbation atlas(Tahoe-100M)와 연결해 세포 상태 전환 정량화.

---

## 연구 배경 (Background)

기존 CRC 단일세포 아틀라스는 기술적(descriptive) 상태 지도에 머물고 인과 메커니즘을 설명하지 못함. 기존 통합 방법([[scArches Reference Atlas Mapping|architecture surgery]])은 환자 특이적 종양 변이를 과도하게 보정해 질환 관련 신호를 소거. Observational 데이터와 perturbation 데이터의 직접 연결이 근본적 난제였음.

---

## 연구 질문 (Research Question)

CRC에서 세포 상태 전환을 유도하는 인과 메커니즘을 규명하고, 치료 반응을 예측하는 cell state-directed therapy 개발에 활용할 수 있는가?

---

## 데이터 또는 샘플 (Data / Sample)

- **Observational**: 11개 공개 CRC scRNA-seq 데이터셋, 311명, 859 샘플, 1.5M 세포
- **Reference**: Oliver et al. 장 상피세포 아틀라스
- **Perturbation**: Tahoe-100M (CRC 세포주 9종, 소분자 화합물 대규모 스크리닝)
- **검증**: 환자 유래 CRC 오르가노이드 (Sanger Institute)

---

## 연구 결과 및 의의 1 (Result & Implication 1)

**Epi-CRC 아틀라스 구축**: Continual Learning으로 300+ 환자, 1.5M 세포를 통합. 37개 상피세포 상태(26개 악성 포함)를 주석화했으며 20개는 기존 마커에 맞지 않는 "hybrid" 상태. Architecture surgery 대비 환자 특이적 종양 변이를 보존하면서 healthy 상태 정렬 성능도 우수. → CRC 비교 생물학의 표준 참조 자원 확립.

---

## 연구 결과 및 의의 2 (Result & Implication 2)

**Endoderm-like 악성 상태 발견**: [[CRC Endoderm-like Cell States|Hybrid-endoderm-like 1 (state 20)]]은 MSS CRC에 농축(OR=9.5), [[CRC Endoderm-like Cell States|Hybrid-endoderm-like 2 (state 21)]]은 MSS+KRAS 돌연변이 CRC에 극도로 농축(OR=106.6). 두 상태 모두 oncofetal plasticity 특성(HNF1A, FOXA3, HNF4A 등 내배엽 TF 활성화)을 보이며 환자 유래 오르가노이드에서 재현됨. → MSS CRC의 세포 정체성 및 악성화 경로 규명.

---

## 연구 결과 및 의의 3 (Result & Implication 3)

**면역-상피 상호작용**: Endoderm-like 1 (state 20)은 exhausted T cell과 CXCL14-CXCR4 축으로 면역억제 미세환경 형성 → stage III/IV 불량 예후와 연관. MSI-H CRC의 inflammatory NF-κB state (state 33)는 CD16+ NK cell과 CX3CL1-CX3CR1 축으로 유리한 면역 환경 형성. → MSS/MSI-H 예후 차이를 세포 상태 수준에서 설명.

---

## 연구 결과 및 의의 4 (Result & Implication 4)

**MAPK 억제 → Endoderm-like 상태 수렴**: Tahoe-100M 연결 분석에서 MAPK inhibition은 증식 표현형에서 이탈해 plastic endoderm-like 상태로 수렴. RAF/RAS inhibitor가 CRC 오르가노이드에서도 동일한 패턴 재현. → 치료 적응의 핵심 경로이자 cell state-directed therapy의 구체적 개입점 제시.

---

## 주요 키워드 5가지

`Continual Learning`, `CRC cell atlas`, `Endoderm-like cell states`, `Perturbation mapping`, `MAPK inhibition`

---

## 해당 논문이 답한 중심 과학적 질문과 그에 대한 답

**질문**: 환자 특이적 세포 상태 다양성을 보존하면서 CRC에서 치료 유발 세포 상태 전환의 인과 메커니즘을 어떻게 규명할 수 있는가?

**답**: Continual Learning 기반 비교 아틀라스로 환자 특이적 변이를 보존한 후 Relative Representations로 perturbation 데이터와 연결하면 치료 유발 세포 상태 전환을 정량화할 수 있다. MAPK 억제는 증식 상태에서 endoderm-like 상태로의 수렴을 유도하며, 이 전환 축이 cell state-directed therapy의 표적이 된다.

---

## 논문 초록과 Figure 설명

**초록**: CRC cell atlas는 종양 생태계의 기술적 지도를 제공하지만, 샘플 간 통합이 환자 특이적 변이를 소거하고 상태 전환 메커니즘에 대한 통찰을 제한한다. 저자들은 300+ 환자, 1.5M 세포를 아우르는 비교 CRC 아틀라스를 continual learning으로 구축했다. MSS, KRAS 돌연변이 CRC에 농축된 endoderm-like 상태를 포함한 비표준 악성 세포 상태를 규명했으며, 환자 유래 오르가노이드에서 재현된다. Observational atlas와 large-scale perturbation atlas를 relative representations로 연결해 MAPK 억제가 증식 표현형에서 endoderm-like 상태로의 이동을 유도함을 확인. 기술적 atlas에서 예측적·개입적 모델링으로의 전환을 제시.

**주요 Figure**:
- **Fig. 1**: CL 프레임워크 개요 — EWC+Replay 기반 cVAE 업데이트 스키마, 11개 데이터셋 통계
- **Fig. 2**: Epi-CRC 아틀라스 — UMAP (37개 세포 상태), SDI, 질환 맥락별 세포 구성 비교
- **Fig. 3**: 면역-상피 상호작용 — 친화도 스코어, CXCL14-CXCR4, CX3CL1-CX3CR1 ligand-receptor 분석
- **Fig. 4**: 오르가노이드 검증 — endoderm-like state 재현, KRAS 돌연변이 연관성
- **Fig. 5**: Perturbation → cell state 전환 매핑 — 15개 archetype, Tahoe-100M MAPK inhibitor 전환 확률, organoid 검증

---

## 한계점 (Limitations)

- Transcriptional/compositional 세포 상태 변화가 실제 임상 결과로 얼마나 이어지는지 추가 연구 필요
- 공간전사체, multi-omics 데이터와의 통합 부재
- 유전적 perturbation 오르가노이드 아틀라스 미포함 → 예측 정확도 향상 여지

---

## 코드/데이터 가용성

- Preprint 단계 (2026-03-24); 코드 저장소 별도 명시 없음
- 데이터: 11개 공개 CRC scRNA-seq 데이터셋 + Tahoe-100M (공개)

---

## 인용 맥락 (Citation Context)

- [[scArches Reference Atlas Mapping]]: architecture surgery의 한계(질환 특이 변이 소거)를 극복 대상으로 인용
- [[scIB Benchmarking]]: 통합 성능 평가 지표(ordering/divergence score) 기반 비교에 참조
