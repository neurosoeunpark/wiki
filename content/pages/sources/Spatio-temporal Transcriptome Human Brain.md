---
title: "Spatio-temporal transcriptome of the human brain"
type: source
tags: [brain-transcriptome, neurodevelopment, spatio-temporal, co-expression, eQTL, sex-differences, human-brain, exon-array]
created: 2026-04-13
updated: 2026-04-13
sources: [raw/papers/nature10523.pdf]
doi: https://doi.org/10.1038/nature10523
---

# Spatio-temporal transcriptome of the human brain

**저자**: Hyo Jung Kang*, Yuka Imamura Kawasawa*, Feng Cheng*, et al., Nenad Šestan
**출판**: Nature, Vol. 478, 27 October 2011, pp. 483–489

---

## 핵심 방법론 (Methods)

Affymetrix GeneChip Human Exon 1.0 ST Array를 이용한 exon-level transcriptome profiling. 57개 사후 뇌에서 채취한 1,340개 조직 샘플로부터 총 RNA 추출. 15개 발달 시기(embryonic ~ late adulthood), 16개 뇌 영역(11개 신피질 영역 포함)을 포함. WGCNA(Weighted Gene Co-Expression Network Analysis)로 공발현 모듈 식별. Illumina 2.5M SNP 칩으로 유전자 타이핑 수행, cis-eQTL 분석. 차등 발현(DEX) 기준: log2 신호 ≥6, detection-above-background P < 0.01.

---

## 연구 배경 (Background)

인간 뇌 발달은 장기간에 걸쳐 정밀하게 조절되는 과정이며, 특정 신경발달 이상은 분자 수준에서의 유전자 발현 이상과 연관됨. 기존 연구들은 소규모 샘플, 제한된 영역·시간대에 집중되어 전체 뇌의 발달 전사체 지형을 포괄적으로 다루지 못했음. 정신과적·신경학적 질환의 발달적 기원을 이해하기 위해서는 발달 전반에 걸친 spatio-temporal 전사체 지도가 필요함.

---

## 연구 질문 (Research Question)

인간 뇌의 다수 영역에 걸쳐 발달 전 기간(태아기 ~ 성인기)의 exon-level 전사체는 어떤 spatio-temporal 패턴을 보이며, 이 패턴이 성별 차이·개인 간 변이·신경질환 유전자와 어떻게 연관되는가?

---

## 데이터 또는 샘플 (Data / Sample)

- **뇌 수: 57개** (임상적으로 이상 없는 사후 뇌), 연령 5.7 PCW ~ 82세
- **성별**: 남성 31, 여성 26, 다민족 구성
- **조직 샘플**: 1,340개 (총 RNA 추출, RIN 평균 8.83)
- **뇌 영역**: 16개 (신피질 11영역 포함: OFC, DFC, VFC, MFC, M1C, S1C, IPC, A1C, STC, ITC, V1C; 해마, 편도체, 선조체, 시상 수질핵, 소뇌피질)
- **시기**: 15개 발달 시기 (Period 1: embryonic ~4-8 PCW ~ Period 15: late adulthood ≥60Y)
- **플랫폼**: Affymetrix GeneChip Human Exon 1.0 ST Array (1.4M probe sets, 17,565 유전자)

> [출처: raw/papers/nature10523.pdf]

---

## 연구 결과 및 의의 1 (Result & Implication 1)

**Spatio-temporal 유전자 발현의 규모와 시기**: 17,565개 유전자 중 86.1%(15,132개)가 적어도 하나의 영역/시기에서 발현. 발현 유전자의 90%는 전사체 또는 exon 수준에서 spatio-temporal 차등 조절됨. 시간적 차등 발현(89.9%)이 공간적 차등 발현(70.9%)보다 우세. 특히 태아기(period 3–7)에 신피질 발현 유전자의 57.7%가 시간적으로 조절되는 반면, 출생 후 발달(9.1%)과 성인기(0.7%)에서는 극히 일부만 조절됨. → 뇌 전사체의 주요 역동적 조절은 태어나기 전 태아기에 집중됨.

---

## 연구 결과 및 의의 2 (Result & Implication 2)

**전사체의 공간적 조직 및 공발현 네트워크**: 계층적 군집화에서 소뇌피질(CBC)이 가장 독특한 전사 프로파일을 보이며, NCX·HIP·AMY는 발달과 함께 전사 유사성이 증가. WGCNA로 29개 공발현 모듈 식별. M8(초기 태아 NCX·HIP 고발현, 이후 감소): 신경 분화 및 전사인자(TBR1, FEZF2, FOXG1, SATB2, NEUROD6, EMX1). M15(신경 기능 성숙 관련): 이온 채널, 신경 전달물질 수용체(RGS4, NRGN). M20(발달기 감소, zinc finger·전사인자 풍부), M2(발달기 증가, 시냅스·수초화 관련) — 출생 직전 두 모듈이 극적으로 반전되어 출생 전후의 전사 전환점을 시사. → 공발현 네트워크가 신경발달 단계별 주요 생물학적 프로세스를 반영함.

---

## 연구 결과 및 의의 3 (Result & Implication 3)

**성별 차이**: 159개 유전자에서 성별 편향 발현 확인 (76.7% 남성 편향). Y염색체(13개: PCDH11Y, RPS4Y1 등)·X염색체(9개)·상염색체(137개). 태아기에 성별 차이가 가장 뚜렷하고 성인기에 감소. 155개 유전자에서 성별 편향 exon usage 확인 (예: NLGN4X exon 7 남성 편향 — ASD 연관 유전자). IGF2(각인 유전자)는 집단 수준에서 남성 편향. → 성별 차이가 발달기에 가장 두드러지며, 이는 일부 신경 발달 장애의 성별 유병률 차이를 설명할 수 있는 분자적 기반이 됨.

---

## 연구 결과 및 의의 4 (Result & Implication 4)

**신경발달 궤적 및 cis-eQTL**: DCX 발현 궤적이 치상회의 DCX 양성 세포 밀도와 높은 상관(r = 0.946), 시냅스 발달 유전자 발현이 시냅스 밀도 변화와 상관(r = 0.940). 신경발달 과정 유전자(세포 증식→DCX→가지돌기→시냅스→수초화)의 순차적 발현 전환 확인. cis-eQTL 분석에서 NCX 39개, HIP 8개, AMY 4개, STR 2개, MD 6개, CBC 5개 유전자에서 SNP-발현 연관(예: rs10785190–GLIPR1L2). → 전사체 데이터가 독립적인 신경생물학적 측정치와 일치하며, 개인 간 유전적 변이가 뇌 영역별 발현을 조절함을 보임.

---

## 주요 키워드 5가지

`Spatio-temporal transcriptome`, `Human neurodevelopment`, `WGCNA co-expression`, `Sex-biased expression`, `cis-eQTL`

---

## 해당 논문이 답한 중심 과학적 질문과 그에 대한 답

**질문**: 인간 뇌의 16개 영역에서 발달 전 기간에 걸쳐 유전자 발현은 어떻게 조직되며, 이 패턴이 신경발달 과정·성별 차이·유전적 변이와 어떻게 연관되는가?

**답**: 발현 유전자의 90%가 spatio-temporal 조절을 받으며, 이 조절의 대부분은 태아기에 집중됨. 전사체는 29개 공발현 모듈로 조직화되어 각 신경발달 단계의 생물학적 프로세스를 반영하고, 출생 직전 전 지구적 전사 전환이 발생함. 성별 차이는 태아기에 가장 두드러지고 성인기에 감소함. SNP–발현 연관(cis-eQTL)이 여러 뇌 영역에서 확인됨.

---

## 논문 초록과 Figure 설명

**초록**: 57개 발달기 및 성인 사후 뇌(5.7 PCW ~ 82세)에서 16개 영역의 1,340개 샘플로부터 exon-level 전사체 데이터를 생성했다. 17,565개 유전자 중 86%가 발현되며, 이 중 90%가 영역 및/또는 시간에 따라 차등 조절된다. spatio-temporal 차이의 대부분은 출생 이전에 발생하며, 이후 영역 간 전사체 유사성이 증가한다. 전사체는 29개 공발현 모듈로 조직화되고, 성별 편향 발현·exon usage, eQTL이 확인된다. 신경생물학적 카테고리 및 질환 관련 유전자의 발달 궤적도 프로파일링했다.

**주요 Figure**:
- **Fig. 1**: MDS plot (공간·시간이 개인·성별·민족 변이보다 전사체 차이를 더 크게 설명), 계층적 군집화 히트맵 (CBC 분리, NCX 발달기 클러스터링)
- **Fig. 2**: 성별 편향 발현 — PCDH11Y(Y염색체), IGF2(상염색체) 발달 궤적, 성별×발달 단계별 DEX 유전자 수
- **Fig. 3**: NLGN4X exon 7 성별 편향 exon usage 히트맵 및 qRT-PCR 검증
- **Fig. 4**: WGCNA 덴드로그램 (29 모듈), M8(초기 태아 신경 분화)·M15(성숙 신경 기능) 히트맵 및 PC1 궤적
- **Fig. 5**: 신경발달 궤적 — DCX·수지돌기·시냅스 발달 유전자 발현과 독립적 비전사체 데이터 비교
- **Fig. 6**: cis-eQTL — SNP 위치 분포 및 GLIPR1L2-rs10785190 연관 검증

---

## 한계점 (Limitations)

- 거짓 양성을 최소화하는 엄격한 기준 적용으로 실제 발생하는 일부 변화를 포착하지 못할 수 있음
- 해부된 조직(다수 세포 유형 혼합) 분석으로, 특정 세포 유형의 전사 기여도와 다이나믹 레인지가 희석됨
- 세포 유형별 spatio-temporal 전사체 분석이 기술적으로 불가했음 (당시)
- 포괄적 eQTL 분석을 위한 샘플 수 부족
- mRNA 수준이 단백질 수준이나 표현형 차이와 항상 선형적으로 연관되지 않음

---

## 코드/데이터 가용성

- 데이터: http://www.humanbraintranscriptome.org (발표 당시 기준)
- 보충 정보: Supplementary Information sections 3–9 (조직 획득·처리, 데이터 생성·검증·분석 전체 기술)

---

## 인용 맥락 (Citation Context)

- 이 논문은 대규모 벌크 RNA 마이크로어레이 데이터 기반 연구로, 이후 단일세포 수준에서 뇌 발달 전사체를 분석하는 연구들([[scArches Reference Atlas Mapping]] 등)의 참조 맥락을 제공함
- 인간 뇌 발달의 전사체적 기반을 제시한 landmark 연구로, 신경발달 장애(ASD, 조현병) 연구에 자주 인용됨
