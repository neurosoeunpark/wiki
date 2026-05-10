---
title: "Benchmarking atlas-level data integration in single-cell genomics (scIB)"
type: source
tags: [benchmarking, scRNA-seq, scATAC-seq, data-integration, scIB, batch-correction, biological-conservation]
created: 2026-04-11
updated: 2026-04-11
sources: [raw/papers/s41592-021-01336-8.pdf]
doi: https://doi.org/10.1038/s41592-021-01336-8
---

# scIB: Benchmarking atlas-level data integration in single-cell genomics

**저자**: Luecken, Büttner et al. | 교신: Colomé-Tatché & Theis
**출판**: Nature Methods, Vol.19, January 2022, pp.41–50

---

## 핵심 방법론 (Methods)

16개 통합 방법 × 4개 전처리 조합(HVG 선택 ± 스케일링) = 최대 68개 통합 설정을 13개 atlas-level 태스크에서 14개 지표(배치 제거 40% + 생물학 보존 60%)로 평가하는 체계적 벤치마크.

---

## 연구 배경 (Background)

단일세포 atlas 수준 통합은 중첩된 배치 효과(프로토콜, donor, 실험실)와 생물학적 변이의 동시 처리가 필요하지만, 기존 벤치마크는 단순한 배치 제거 문제에만 집중해 atlas 규모의 복잡한 태스크에서의 성능 비교가 없었음. 49개 이상의 통합 방법이 존재하나 객관적 선택 기준이 부재.

---

## 연구 질문 (Research Question)

Atlas 규모의 복잡한 단일세포 통합 태스크에서 어떤 방법이 배치 제거와 생물학적 변이 보존을 가장 잘 균형 잡는가?

---

## 데이터 또는 샘플 (Data / Sample)

23개 출판물의 >1.2M 세포, 85개 배치, 13개 통합 태스크:
- **scRNA-seq**: 췌장(9배치), 폐(16 donors), 면역human(10 donors), 면역human+mouse(23 samples), 마우스 뇌 RNA(978K 세포)
- **scATAC-seq**: 마우스 뇌 소규모/대규모 (windows/peaks/gene activity 각 3개 태스크)
- **시뮬레이션**: 2종 (세포 구성 변화, 중첩 배치 효과)

---

## 연구 결과 및 의의 1 (Result & Implication 1)

**레이블 활용 방법이 복잡한 태스크에서 최우수**: scANVI, scGen이 생물학적 변이 보존에서 압도적 우위. 단, scGen은 레이블에 없는 변이(공간 위치 등)를 제거하는 부작용 있음. → 레이블 품질이 통합 품질을 결정짓는 핵심 요소.

---

## 연구 결과 및 의의 2 (Result & Implication 2)

**HVG 선택은 도움, 스케일링은 해악**: HVG 선택은 거의 모든 방법에서 통합 성능 향상. 스케일링은 배치 제거를 우선시하는 방향으로 치우쳐 생물학적 보존 저하. → 전처리 선택이 방법 선택만큼 중요.

---

## 연구 결과 및 의의 3 (Result & Implication 3)

**강한 배치 효과에서의 트레이드오프**: 종 간, 조직 위치, 단핵 vs. 단세포 등 강한 배치 효과에서는 배치 제거와 생물학 보존 간 명확한 상충 관계. Harmony, LIGER는 배치 제거 우선; Scanorama, scVI는 균형; DESC, Conos는 생물학 보존 우선. → 목적에 따른 방법 선택 가이드 제공.

---

## 연구 결과 및 의의 4 (Result & Implication 4)

**scATAC-seq 통합은 feature space에 크게 의존**: scATAC-seq에서는 LIGER, BBKNN, Seurat v3 RPCA가 효과적. Windows vs. peaks vs. gene activity feature space 선택이 통합 성능에 큰 영향. → scATAC-seq 통합에서는 feature space 선택이 방법 선택보다 중요할 수 있음.

---

## 주요 키워드 5가지

`scIB`, `Benchmarking`, `Batch correction`, `Biological conservation`, `HVG selection`

---

## 해당 논문이 답한 중심 과학적 질문과 그에 대한 답

**질문**: Atlas 규모의 복잡한 단일세포 통합 태스크에서 어떤 방법과 전처리 조합이 최선인가?

**답**: 레이블이 있으면 scANVI/scGen, 없으면 Scanorama/scVI가 복잡한 태스크에서 최우수. HVG 선택은 필수, 스케일링은 피해야 함. Harmony/LIGER는 단순 태스크나 scATAC-seq에 적합. 방법보다 전처리 선택이 성능에 더 큰 영향을 미칠 수 있음.

---

## 논문 초록과 Figure 설명

**초록**: 단일세포 atlas는 다양한 위치, 실험실, 조건의 샘플을 포함해 복잡한 중첩 배치 효과를 가짐. 저자들은 68개 방법-전처리 조합을 85개 배치, >1.2M 세포, 13개 atlas-level 통합 태스크에서 14개 지표로 평가했다. HVG 선택이 성능을 향상시키고 스케일링은 배치 제거를 우선시함을 보였다. scANVI, Scanorama, scVI, scGen이 복잡한 통합 태스크에서 우수하며, scATAC-seq 통합 성능은 feature space 선택에 강하게 의존한다.

**주요 Figure**:
- **Fig. 1**: 벤치마크 설계 개요 — 16개 방법 × 전처리 × 13태스크 × 14지표 스키마
- **Fig. 2**: 면역세포 태스크 결과 — 지표별 성능 원형 테이블, UMAP 통합 결과
- **Fig. 3**: 배치 제거 vs. 생물학 보존 트레이드오프 산점도
- **Extended Data Fig. 5-8**: scATAC-seq 태스크별 결과, 확장성 비교

---

## 한계점 (Limitations)

- 2020년 11월 기준 방법들만 포함 (이후 등장한 scPoli, CL 기반 방법 등 미포함)
- Ground truth 세포 타입 레이블의 품질에 평가가 의존적
- 벤치마크 자체가 특정 전처리 파이프라인(scanpy 기반)에서 수행됨

---

## 코드/데이터 가용성

- scIB Python 모듈: https://github.com/theislab/scib
- 파이프라인: https://github.com/theislab/scib-pipeline
- 재현 코드: https://github.com/theislab/scib-reproducibility
- 전처리된 데이터셋: Figshare doi:10.6084/m9.figshare.12420968

---

## 인용 맥락 (Citation Context)

- [[scArches Reference Atlas Mapping]]: scANVI(scArches 기반)가 상위 성능 기록 — scArches의 통합 성능 근거로 인용
- [[Harmony Single-cell Integration]]: 중간 수준 성능으로 평가 — 단순 태스크 및 scATAC-seq에 적합
- [[scPoli Population-level Integration]]: scIB 최상위 방법(scANVI)을 5.06% 상회하는 성능 달성의 비교 기준으로 인용
- [[CRC Cell States Perturbation Mapping]]: 통합 성능 평가 지표 설계 기반으로 참조
