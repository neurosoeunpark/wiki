---
title: "Single-Cell RNA Sequencing in Cancer: Lessons Learned and Emerging Challenges"
authors: Mario L. Suvà, Itay Tirosh
year: 2019
doi: 10.1016/j.molcel.2019.05.003
source: suva-tirosh-2019-single-cell-rna-sequencing-cancer.md
category: other
status: stub
tags: [cancer, single-cell, eITH, cancer-cell-hierarchy, developmental-program, glioma, melanoma, cancer-development-thesis, review]
---

## Summary
**Single-cell RNA-seq cancer 연구의 종합 review (Molecular Cell, 2019)** — 다양한 tumor type 단일세포 분석에서 반복적으로 관찰되는 expression intra-tumor heterogeneity (eITH) 의 recurrent pattern 정리. 핵심 thesis: **malignant cell의 heterogeneity가 종종 정상 발달의 differentiation hierarchy를 그대로 닮음** — IDH-mutant glioma, H3-K27M glioma, 멜라노마, head & neck cancer 모두에서 확인. 본 wiki cancer↔dev cluster의 umbrella review. Suvà (MGH/Harvard/Broad) + Tirosh (Weizmann) — 분야 두 대표 lab의 공저.

## Key Contributions
- **eITH 의 3가지 결정 요인** 정리: genetic heterogeneity + epigenetic/developmental program + extrinsic/spatial factor
- **Recurrent eITH pattern**: cell cycle + stress/hypoxia + lineage/developmental program이 다양한 cancer에서 반복 출현
- **Cancer cell hierarchy ↔ developmental hierarchy** thesis 직접 정립 (정상 OPC/astrocyte/melanocyte program이 cancer에서 hijack)
- Malignant cell이 patient sample에 의해 cluster되고, non-malignant cell은 cell type에 의해 cluster된다는 일관 발견
- 6가지 emerging challenge (malignant 분리 / clonal architecture / program ID / microenvironment / longitudinal / functional validation)

## Methods & Architecture
Review (no original wet experiments). 다양한 cancer scRNA-seq dataset 종합. Cancer type별 representative scatter plot + recurrent program annotation.

## Results
- 6+ cancer type에서 reproducible eITH pattern 입증
- IDH-mutant glioma: tri-lineage (oligodendrocyte/astrocyte/progenitor) — Tirosh 2016
- H3-K27M glioma: OPC state로 stuck — Filbin 2018
- 멜라노마: AXL-high invasive vs MITF-high differentiated — Tirosh 2016a
- Head & neck: epithelial vs partial-EMT vs differentiated — Puram 2017
- 모두 정상 발달 program이 cancer에 frozen / dysregulated state로 reactivate

## Limitations
- 본 review가 정리한 pattern 외 cancer type-specific pattern 다수
- scRNA-seq sparsity (dropout) 가 lineage tracing 정확성 제약
- Spatial transcriptomics, multi-omics가 본 frame의 다음 단계
- Heterogeneity targeting therapeutic strategy 부족

## Related Papers
- [[brain-development/bhaduri-2020-outer-radial-glia-like-cancer]] — GBM oRG-like cancer cell, 본 review thesis의 primate-specific 확장
- [[brain-development/couturier-2020-single-cell-rna-seq-glioblastoma-recapitulates]] — GBM이 normal neurodev hierarchy를 recapitulate, 본 review thesis의 IDH-wt 확장
- [[brain-development/wang-2025-molecular-cellular-dynamics]] — Tri-IPC가 GBM과 transcriptome 닮음 (영장류 progenitor angle)
- [[neuroscience/tilot-2015-balancing-proliferation-connectivity-pten]] — PTEN dual-phenotype, 분자 cancer↔ASD dual-use
- [[drug-resistance/xu-2026-mapping-convergent-regulators-of]] — 멜라노마 drug resistance의 convergence pattern (본 review의 멜라노마 evidence와 직접 연결)
- [[overviews/convergent-regulation-across-systems]] — 본 review의 cancer convergence frame이 NDD convergence와 병렬되는 큰 그림
