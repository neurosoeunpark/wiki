---
title: "Single-cell RNA-seq reveals that glioblastoma recapitulates a normal neurodevelopmental hierarchy"
authors: Charles P. Couturier, Shamini Ayyadhury, Phuong U. Le, Javad Nadaf, Jean Monlong, Gabriele Riva, Redouane Allache, Salma Baig, Xiaohua Yan, Mathieu Bourgey, Changseok Lee, Yu Chang David Wang, V. Wee Yong, Marie-Christine Guiot, Hamed Najafabadi, Bratislav Misic, Jack Antel, Guillaume Bourque, Jiannis Ragoussis, Kevin Petrecca
year: 2020
doi: 10.1038/s41467-020-17186-5
category: brain-development
pdf_path: papers/couturier-2020-single-cell-rna-seq-glioblastoma-recapitulates.pdf
pdf_filename: couturier-2020-single-cell-rna-seq-glioblastoma-recapitulates.pdf
source_collection: manual
status: stub
---

## One-line Summary
**Adult IDH-wt glioblastoma 세포 53,586개 + 정상 fetal brain 22,637개의 single-cell RNA-seq 비교로 GBM에 conserved tri-lineage cancer hierarchy를 발견 — glial progenitor-like cell이 apex에 위치**. RNA velocity로 progenitor population이 다른 cell type의 originator임을 입증. Title 자체가 thesis: **"glioblastoma는 normal neurodevelopmental hierarchy를 recapitulate한다"**. Bhaduri 2020의 자매 paper로 cancer↔dev thesis의 결정적 증거.

## 1. Document Info
- Journal: Nature Communications (11:3406)
- Published: 2020-07
- Affiliations: Petrecca lab — McGill University (Montreal Neurological Institute) + 다수 협력기관 (Bourque, Ragoussis 등)
- Type: Original research

## 2. Key Contributions
- **GBM single-cell atlas + 정상 fetal brain 직접 비교** — 53,586 GBM cells × 22,637 normal fetal brain cells
- **Conserved tri-lineage cancer hierarchy** 발견 — neural lineage (neuronal-like, astrocytic-like, oligodendrocytic-like) 의 세 갈래가 GBM에서 그대로 재현
- **Glial progenitor-like cell이 hierarchy의 apex** — 가장 cycling이 활발하고 (cell cycle gene 발현 ↑), RNA velocity로 다른 cell type의 originator임을 보여줌
- 이 progenitor population이 **functional GSC (glioblastoma stem cell)** 와 일치 — 기존 GSC 정의의 분자 기반 명확화
- **Therapeutic target identification** — progenitor-specific marker로부터 GSC-targeting candidate 발굴
- 이전 IDH-mutant glioma + 소아 high-grade glioma에서 보였던 bi-lineage hierarchy를 IDH-wt adult GBM에서 tri-lineage로 확장

## 3. Methods & Architecture
- **scRNA-seq**: 10x Genomics, 4 GBM 환자 sample
- **Reference dataset**: Nowakowski 2017 + Pollen 2015 normal fetal cortex (gestational week 5-21)
- **Cell type alignment**: 정상 fetal cell type vs GBM cell의 transcriptome similarity scoring
- **Cancer cell vs non-cancer 분리**: copy number alteration (CNA) inference + tumor-specific marker
- **RNA velocity**: differentiation trajectory + originator identification
- **Functional validation**: cell line + xenograft에서 progenitor population의 stem-like 특성 입증

## 4. Key Results & Benchmarks
- 모든 4 GBM에서 conserved tri-lineage hierarchy 검출 — patient-specificity 위에 보편 패턴 존재
- Glial progenitor-like cells가 cycling cell의 majority (60%+) 차지
- RNA velocity: progenitor → neuronal/astrocytic/oligodendrocytic lineage로 directional 전환
- Progenitor-specific gene set이 GBM 환자 prognosis와 강한 negative correlation
- Progenitor-targeting candidate drug compound 발굴 (이후 preclinical 검증 단계)

## 5. Limitations & Future Work
- 4 환자 sample만 — 더 큰 cohort 필요
- IDH-wt만 다룸 — IDH-mutant + 다른 brain tumor type 비교는 추후 연구
- Progenitor의 lineage origin (정상 progenitor에서 직접 transformation? Or de-differentiation?) 여전히 open
- Therapeutic target identification은 계산 단계만, in vivo validation 부족

## 6. Related Work
- Patel et al. 2014 Science — 단일세포 GBM 첫 연구 (이 연구의 기술적 출발점)
- Bhaduri et al. 2020 Cell Stem Cell — 자매 paper, oRG-like cancer stem cell (보다 specific population)
- Lui, Hansen, Kriegstein 2011 — oRG 등 OSVZ progenitor 분자 기반
- Nowakowski et al. 2017, Pollen et al. 2015 — 정상 fetal brain reference (이 paper의 비교 dataset)
- Wang et al. 2025 — Tri-IPC가 GBM과 닮은 progenitor를 만드는 영장류 mechanism
- Suva & Tirosh 2019 — cancer cell hierarchy 일반 review
- Filbin et al. 2018 — H3-K27M 소아 glioma의 비슷한 developmental hierarchy

## 7. Glossary
- **Tri-lineage cancer hierarchy**: GBM 안에 progenitor → neuronal/astrocytic/oligodendrocytic 세 갈래 lineage가 정상 발달처럼 존재한다는 frame.
- **Glial progenitor-like cell**: GBM hierarchy의 apex. 정상 발달의 apical/basal radial glia signature를 닮음. Cycling 활발, 다른 GBM cell의 originator.
- **RNA velocity**: spliced vs unspliced transcript 비율로 cell의 transcriptional trajectory direction 추론. La Manno 2018.
- **CNA (Copy Number Alteration)**: GBM tumor cell vs non-cancer cell 분리 기준. tumor cell은 chromosomal aberration 빈번.
- **GSC (Glioblastoma Stem Cell)**: GBM의 self-renewing + propagating sub-population. 본 paper에서 progenitor-like population과 합쳐짐.
