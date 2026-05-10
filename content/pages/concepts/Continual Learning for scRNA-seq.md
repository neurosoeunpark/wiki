---
title: Continual Learning for scRNA-seq Atlas Integration
type: concept
tags: [continual-learning, scRNA-seq, atlas, machine-learning, cVAE, EWC]
created: 2026-04-11
updated: 2026-04-11
sources: [raw/papers/2026.03.03.708171v3.full.pdf]
---

# Continual Learning for scRNA-seq Atlas Integration

---

## 핵심 개념

단일세포 RNA-seq 참조 아틀라스를 새 데이터셋으로 **순차적으로 확장**하면서 이전에 학습한 생물학적 구조를 보존하는 방법론. 기존 Transfer Learning(architecture surgery) 대비 **모델 가중치를 동결하지 않고 지속 학습**이 가능.

---

## 기존 방법(Architecture Surgery)의 한계

- Transfer Learning에서는 reference 모델의 일부 가중치를 동결
- 동결로 인해 새로운 질환 특이적 상태(disease-specific states)에 대한 **적응성(adaptability)** 제한
- 특히 case-control 암 데이터에서 환자 특이적 종양 변이가 과도하게 보정됨

---

## CL 프레임워크 구성 요소

### 1. cVAE (Conditional Variational Autoencoder)
- scANVI v0.16.1 기반
- 배치 효과 제거 + 통합 참조 아틀라스 구축에 사용되는 표준 모델

### 2. Elastic Weight Consolidation (EWC) — case-control 수정판
- 가중치 업데이트 시 **이전 지식에 중요한 가중치에 페널티** 부여
- 표준 EWC: reference 데이터의 Fisher Information 사용
- **수정판**: reference healthy 세포 + query control 세포 Fisher Information의 **Hadamard product** 사용
  → case-control 설계에서 정상 상태와 질환 상태 모두 보존

### 3. Experience Replay (ER)
- Reference 아틀라스 세포의 **20% 서브셋(Replay buffer)**을 새 학습 시 재학습
- Catastrophic Forgetting (CF) 방지
- 버퍼 선택 전략: 랜덤 선택 vs. Bregman Information 기반 불확실성 선택(top-k/bottom-k/mixed)

### 4. 총 손실 함수
```
L_total = L_ELBO(query + replay buffer) + λ·EWC_penalty
```

---

## 성능 평가 지표

| 지표 | 측정 대상 |
|------|-----------|
| Shift-cancer | 정상 vs. 종양 세포 간 거리 (크면 좋음) |
| Shift-control | Reference와 query control 정렬 거리 (작으면 좋음) |
| Ordering Score | 알려진 trajectory의 세포 상태 순서 보존도 |
| Divergence Score | Trajectory 분기점 보존도 |

---

## 적용 사례

- [[CRC Cell States Perturbation Mapping]] — Epi-CRC 아틀라스 구축 (300+ 환자, 1.5M 세포)

---

## 관련 개념

- [[Single-cell Atlas Integration]]
- [[CRC Endoderm-like Cell States]]
