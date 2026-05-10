---
title: "Single-cell RNA-seq reveals that glioblastoma recapitulates a normal neurodevelopmental hierarchy"
authors: Charles P. Couturier, Shamini Ayyadhury, Phuong U. Le, Javad Nadaf, Jean Monlong, Gabriele Riva, Redouane Allache, Salma Baig, Xiaohua Yan, Mathieu Bourgey, Changseok Lee, Yu Chang David Wang, V. Wee Yong, Marie-Christine Guiot, Hamed Najafabadi, Bratislav Misic, Jack Antel, Guillaume Bourque, Jiannis Ragoussis, Kevin Petrecca
year: 2020
doi: 10.1038/s41467-020-17186-5
source: couturier-2020-single-cell-rna-seq-glioblastoma-recapitulates.md
category: brain-development
status: stub
tags: [glioblastoma, neurodevelopmental-hierarchy, glial-progenitor, RNA-velocity, GSC, cancer-development-thesis, single-cell, IDH-wt]
---

## Summary
**Adult IDH-wt GBM 53,586 cells + 정상 fetal brain 22,637 cells의 single-cell RNA-seq 비교로 GBM에 conserved tri-lineage cancer hierarchy를 발견 — glial progenitor-like cell이 apex에 위치**. RNA velocity로 progenitor가 다른 cell type의 originator임을 입증. **Title 자체가 thesis: GBM은 normal neurodevelopmental hierarchy를 recapitulate한다**. Bhaduri 2020의 자매 paper. Petrecca lab (McGill).

## Key Contributions
- 4 GBM 환자 × 53,586 cells + 정상 fetal brain (gw 5-21) 22,637 cells의 scRNA-seq 비교
- **Conserved tri-lineage cancer hierarchy**: neuronal-like / astrocytic-like / oligodendrocytic-like 세 갈래
- **Glial progenitor-like cell이 hierarchy의 apex** — cycling cell의 majority, RNA velocity originator
- 이 progenitor population = functional GSC (glioblastoma stem cell)
- Therapeutic target identification — progenitor-specific marker 기반 candidate drug 발굴

## Methods & Architecture
- 10x Genomics scRNA-seq
- Reference: Nowakowski 2017 + Pollen 2015 normal fetal cortex
- CNA inference로 cancer vs non-cancer 분리
- RNA velocity로 differentiation trajectory + originator
- Cell line + xenograft에서 stem-like 특성 functional validation

## Results
- 모든 4 GBM에서 conserved tri-lineage hierarchy
- Glial progenitor-like cells = cycling cells의 60%+
- Progenitor → neuronal/astrocytic/oligodendrocytic으로 directional 전환 (RNA velocity)
- Progenitor-specific gene set ↔ 환자 prognosis 강한 negative correlation
- IDH-wt adult GBM에서 처음으로 tri-lineage hierarchy 입증 (이전엔 IDH-mutant + 소아 high-grade glioma만)

## Limitations
- 4 환자 sample만 — 더 큰 cohort 필요
- IDH-wt만 — 다른 glioma type 비교 없음
- Progenitor의 lineage origin (transformation? Or de-differentiation?) open
- Therapeutic candidate가 in vivo validation 부족

## Related Papers
- [[brain-development/bhaduri-2020-outer-radial-glia-like-cancer]] — 자매 paper, oRG-like cancer stem cell의 더 specific characterization
- [[brain-development/lui-2011-development-evolution-human-neocortex]] — normal cortical hierarchy reference, 이 연구의 비교 baseline
- [[brain-development/wang-2025-molecular-cellular-dynamics]] — Tri-IPC도 cancer 유사 transcriptome
- [[brain-development/keefe-2025-lineage-resolved-atlas-developing]] — normal human cortical lineage tracing reference
- [[other/suva-tirosh-2019-single-cell-rna-sequencing-cancer]] — cancer cell hierarchy 일반 frame
- [[neuroscience/tilot-2015-balancing-proliferation-connectivity-pten]] — PTEN dual-phenotype cancer↔ASD 사례
- [[brain-development/dibella-2021-molecular-logic-of-cellular]] — normal cortical post-mitotic diversification reference
- [[brain-development/trevino-2020-chromatin-accessibility-forebrain]] — normal forebrain chromatin trajectory reference
