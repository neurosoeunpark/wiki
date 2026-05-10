---
title: "Fast, sensitive and accurate integration of single-cell data with Harmony"
type: source
tags: [Harmony, batch-correction, scRNA-seq, integration, PCA, soft-clustering, LISI]
created: 2026-04-11
updated: 2026-04-11
sources: [raw/papers/s41592-019-0619-0.pdf]
doi: https://doi.org/10.1038/s41592-019-0619-0
---

# Harmony: Fast, sensitive and accurate integration of single-cell data

**저자**: Korsunsky et al. | 교신: Raychaudhuri
**출판**: Nature Methods, Vol.16, December 2019, pp.1289–1296

---

## 핵심 방법론 (Methods)

PCA 임베딩을 입력으로 받아, 다중 데이터셋 혼합을 유도하는 soft k-means clustering과 cluster별 선형 보정 인자를 반복적으로 계산해 세포 특이적 배치 보정 임베딩을 생성.

---

## 연구 배경 (Background)

단일세포 RNA-seq 데이터셋이 HCA 등을 통해 대규모로 생성되면서 서로 다른 실험실, 프로토콜, 기술로 생성된 데이터를 통합해야 하는 필요성이 증가. 기존 방법들(MNN, MultiCCA, BBKNN, Scanorama)은 대용량 데이터에서 속도/메모리 문제가 있거나 복잡한 실험 설계(다중 배치 인자 동시 처리)를 지원하지 못했음.

---

## 연구 질문 (Research Question)

대규모 단일세포 데이터셋에서 배치 효과를 빠르고 정확하게 제거하면서 세포 타입 정체성을 보존할 수 있는 확장 가능한 통합 알고리즘을 만들 수 있는가?

---

## 데이터 또는 샘플 (Data / Sample)

- Cell line 데이터 (Jurkat/293T, 세 데이터셋 혼합): 통제된 벤치마크
- Human PBMC (10X 3종 다른 chemistry: 3pV1, 3pV2, 5p)
- 췌장 섬세포 (5개 study 메타분석)
- 마우스 배아발생 scRNA-seq (longitudinal)
- HCA 데이터 (528K 세포, 16명, 2조직) — 확장성 벤치마크
- 공간전사체 + scRNA-seq 교차 모달리티

---

## 연구 결과 및 의의 1 (Result & Implication 1)

**우수한 통합 정확도**: Cell line 벤치마크에서 MNN, BBKNN, MultiCCA, Scanorama 대비 통계적으로 유의하게 높은 iLISI + 낮은 cLISI 달성. PBMC에서 83% 이상의 세포가 다른 모든 방법보다 높은 iLISI를 기록. → 배치 제거와 세포 타입 분리를 동시에 달성.

---

## 연구 결과 및 의의 2 (Result & Implication 2)

**확장성**: 30K 세포 4분, 500K 세포 68분 (MultiCCA 대비 30-200배 빠름). 메모리는 500K 세포에서 7.2GB (Scanorama 대비 30-50배 절감). 개인 컴퓨터에서 ~10^6 세포 처리 가능. → HCA 규모의 atlas 분석을 일반 연구자도 수행 가능.

---

## 연구 결과 및 의의 3 (Result & Implication 3)

**복잡한 실험 설계 지원**: 다중 배치 인자(기술, 조직, 실험실 등)를 동시에 처리하는 penalty term 설계. 공간전사체와 scRNA-seq 교차 모달리티 통합 시연. → 단일 배치 변수만 처리하던 기존 방법의 한계 극복.

---

## 연구 결과 및 의의 4 (Result & Implication 4)

**LISI 지표 제안**: iLISI(통합 품질)와 cLISI(세포 타입 분리 정확도)를 동시에 정량화하는 새 평가 지표 도입. 이후 [[scIB Benchmarking]]의 표준 지표(graph iLISI, graph cLISI)로 채택됨. → 단일세포 통합 방법 평가의 표준화에 기여.

---

## 주요 키워드 5가지

`Harmony`, `Soft k-means clustering`, `Batch correction`, `LISI`, `Scalable integration`

---

## 해당 논문이 답한 중심 과학적 질문과 그에 대한 답

**질문**: 대규모 단일세포 데이터에서 복잡한 배치 효과를 빠르고 메모리 효율적으로 제거하면서 세포 타입 정체성을 보존할 수 있는가?

**답**: PCA 기반 soft clustering + 선형 보정의 반복으로 세포 타입별 cluster 내에서만 배치 보정을 수행하면 된다. 이 방식으로 500K 세포를 개인 컴퓨터에서 68분, 7.2GB 메모리만으로 처리하면서 기존 방법보다 우수한 통합과 세포 타입 분리를 달성했다.

---

## 논문 초록과 Figure 설명

**초록**: 단일세포 RNA-seq 데이터셋의 다양성이 증가하면서 기술적 차이가 혼재된 공동 분석이 어렵다. Harmony는 세포를 데이터셋이 아닌 세포 타입별로 그룹화하는 shared embedding으로 투영하는 알고리즘이다. 다중 실험/생물학적 인자를 동시에 처리하며, 6가지 분석에서 기존 알고리즘 대비 우수한 성능을 보인다. 개인 컴퓨터에서 ~10^6 세포 통합이 가능하다.

**주요 Figure**:
- **Fig. 1**: Harmony 알고리즘 개요 — soft clustering → centroid 계산 → 보정 인자 도출 → 세포 보정의 반복 과정 도식
- **Fig. 2**: LISI 지표 정의 — iLISI(통합) vs. cLISI(정확도) 개념, cell line 벤치마크 결과
- **Fig. 3**: 확장성 벤치마크 — HCA 데이터(500K 세포) 런타임/메모리 비교, PBMC subpopulation 분석
- **Fig. 4**: 복잡한 실험 설계 — 다중 배치 인자, 췌장 메타분석, 공간전사체 통합

---

## 한계점 (Limitations)

- 선형 보정만 수행 → 비선형 배치 효과에 취약
- 복잡한 통합 태스크([[scIB Benchmarking]] 기준)에서 Scanorama, scVI, scANVI보다 성능 저하
- 희귀 세포 타입 보존(isolated label F1) 점수 낮음 — 희귀 세포 타입을 주변 세포 타입과 혼합시키는 경향
- 배치 크기가 매우 작은 경우 θ discounting으로 일부 보완하나 여전히 불안정

---

## 코드/데이터 가용성

- 코드(R): https://github.com/immunogenomics/harmony
- Seurat 파이프라인 통합 함수 포함

---

## 인용 맥락 (Citation Context)

- [[scIB Benchmarking]]: 16개 방법 중 하나로 벤치마크됨 — 단순 태스크 및 scATAC-seq 통합에서 중간 수준 성능
