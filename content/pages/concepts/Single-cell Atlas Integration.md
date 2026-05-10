---
title: Single-cell Atlas Integration
type: concept
tags: [scRNA-seq, data-integration, batch-correction, atlas, reference-mapping]
created: 2026-04-11
updated: 2026-04-11
sources: [raw/papers/s41587-021-01001-7.pdf, raw/papers/s41592-019-0619-0.pdf, raw/papers/s41592-021-01336-8.pdf, raw/papers/s41592-023-02035-2.pdf, raw/papers/2026.03.03.708171v3.full.pdf]
---

# Single-cell Atlas Integration

여러 데이터셋의 단일세포 데이터를 배치 효과를 제거하면서 생물학적 변이를 보존하는 통합 방법론 개요.

---

## 핵심 과제

배치 효과(실험실, 프로토콜, 시퀀싱 기술) 제거 vs. 생물학적 변이(세포 타입, 상태, 질환) 보존 간의 **트레이드오프**가 핵심 난제.

---

## 주요 방법론 비교

| 방법 | 접근 | 강점 | 한계 |
|------|------|------|------|
| [[Harmony Single-cell Integration\|Harmony]] | PCA 기반 반복 soft clustering + 선형 보정 | 빠름, 메모리 효율, 복잡한 실험 설계 지원 | 복잡 태스크에서 성능 저하, 희귀 세포 보존 약함 |
| scVI | CVAE (비감독) | 배치 제거 & 생물학 보존 균형 | 레이블 정보 미활용 |
| scANVI | CVAE (반감독, 레이블 활용) | 복잡 태스크 최상위 성능 | 레이블 필요 |
| [[scArches Reference Atlas Mapping\|scArches]] | Architecture surgery (TL) | 데이터 공유 없이 reference 매핑, 파라미터 4-5 OOM 절감 | 질환 특이 변이 소거 위험 |
| [[scPoli Population-level Integration\|scPoli]] | CVAE + condition embedding + prototype | 샘플 수준 표현, 대규모 확장, open-world | — |
| [[Continual Learning for scRNA-seq\|CL (2026)]] | EWC + Experience Replay | case-control 질환 변이 보존 | — |

---

## 평가 지표 ([[scIB Benchmarking|scIB]] 표준)

전체 점수 = 배치 제거 40% + 생물학 보존 60%

**배치 제거**: kBET, graph iLISI, PCA regression, batch ASW, kNN connectivity
**생물학적 보존**: graph cLISI, ARI, NMI, cell-type ASW, isolated label scores, trajectory 보존, HVG 중복도, 세포 주기 분산

---

## 방법 선택 가이드 (scIB 기준)

- **단순 태스크, 속도 우선**: Harmony
- **복잡 태스크, 레이블 없음**: Scanorama, scVI
- **복잡 태스크, 레이블 있음**: scANVI, scGen
- **Reference 매핑, 데이터 공유 불가**: scArches
- **수천 샘플 population-level 분석**: scPoli
- **Case-control 질환 특이 변이 보존**: CL 프레임워크
