---
title: "Single-Cell RNA Sequencing in Cancer: Lessons Learned and Emerging Challenges"
authors: Mario L. Suvà, Itay Tirosh
year: 2019
doi: 10.1016/j.molcel.2019.05.003
category: other
pdf_path: papers/suva-tirosh-2019-single-cell-rna-sequencing-cancer.pdf
pdf_filename: suva-tirosh-2019-single-cell-rna-sequencing-cancer.pdf
source_collection: manual
status: stub
---

## One-line Summary
**Single-cell RNA-seq cancer 연구의 종합 review (Molecular Cell)** — 다양한 tumor type 단일세포 분석에서 반복적으로 관찰되는 **expression intra-tumor heterogeneity (eITH) 의 recurrent pattern**을 정리. 핵심 thesis: **malignant cell의 heterogeneity가 종종 정상 발달의 differentiation hierarchy를 그대로 닮음** — IDH-mutant glioma, H3-K27M glioma, 멜라노마, head & neck cancer 모두에서 이 pattern 확인. 본 wiki cancer↔dev cluster의 umbrella review.

## 1. Document Info
- Journal: Molecular Cell (75(1):7-12, perspective issue)
- Published: 2019-07-11
- Affiliations: Suvà — Mass General Hospital + Harvard Medical + Broad Institute. Tirosh — Weizmann Institute Mol Cell Biol. (브로드 + 와이즈만 합작 — single-cell cancer 분야의 두 대표 lab)
- Type: Review / Perspective

## 2. Key Contributions
- **eITH (expression intra-tumor heterogeneity) 의 3가지 결정 요인** 정리: (1) genetic heterogeneity (subclonal mutation), (2) **epigenetic + developmental program** (정상 stem cell + differentiated progeny), (3) extrinsic + spatial factor (oxygen, nutrient, cell-cell)
- 핵심 발견: **malignant cell이 patient sample에 의해 cluster되고, non-malignant cell은 cell type에 의해 cluster됨** — inter-tumor heterogeneity가 malignant cell에서 훨씬 큼
- **Recurrent eITH pattern**: cell cycle program + stress/hypoxia program + **lineage/developmental program**이 다양한 cancer type에서 반복 출현
- **Cancer cell hierarchy ↔ developmental hierarchy** thesis 직접 정립: IDH-mutant glioma (Tirosh 2016), H3-K27M glioma (Filbin 2018) 등이 정상 OPC/astrocyte lineage program을 hijack
- Single-cell이 가져오는 6가지 emerging challenge: (1) malignant vs non-malignant 분리, (2) clonal architecture, (3) program identification, (4) microenvironment context, (5) longitudinal dynamics, (6) functional validation

## 3. Methods & Architecture
Review (no original wet experiments). 다양한 cancer scRNA-seq dataset (IDH-mutant glioma, H3-K27M glioma, 멜라노마, head & neck, breast, ovarian 등) 종합 + recurrent pattern 추출. 각 cancer에 대해 representative scatter plot 제시 (Figure 1).

## 4. Key Results & Benchmarks
- 6개 이상의 cancer type에서 reproducible eITH pattern 입증 (Figure 1)
- IDH-mutant glioma: tri-lineage (oligodendrocyte / astrocyte / progenitor) (Tirosh 2016)
- H3-K27M glioma: oligodendrocyte progenitor (OPC) state로 stuck (Filbin 2018)
- 멜라노마: AXL-high invasive vs MITF-high differentiated 두 state (Tirosh 2016a)
- Head & neck: epithelial vs partial-EMT vs differentiated 세 state (Puram 2017)
- 모두 **정상 발달 program이 cancer에 frozen / dysregulated state로 reactivate**

## 5. Limitations & Future Work
- 본 review가 정리한 eITH pattern 외에도 cancer type-specific pattern 다수 존재
- Single-cell technology의 sparsity (dropout) 가 lineage tracing의 정확성 제약
- Spatial transcriptomics, multi-omics 가 본 frame의 다음 단계
- Therapeutic intervention 디자인 — heterogeneity targeting strategy 부족

## 6. Related Work
- Patel et al. 2014 Science — single-cell GBM 첫 연구 (eITH discovery)
- Tirosh et al. 2016a Science (멜라노마), 2016b Nature (IDH-mutant glioma) — 본 review의 두 핵심 evidence
- Filbin et al. 2018 Science — H3-K27M glioma의 OPC-stuck state
- Bhaduri et al. 2020 — GBM oRG-like cancer cell (본 review thesis의 primate-specific 확장)
- Couturier et al. 2020 — GBM이 normal neurodevelopmental hierarchy를 recapitulate (본 review thesis의 IDH-wt 확장)
- Tilot et al. 2015 — PTEN dual-phenotype (cancer + ASD), 분자 수준 dual-use 사례

## 7. Glossary
- **eITH (expression intra-tumor heterogeneity)**: 한 tumor 안의 cell-to-cell 발현 다양성. Genetic heterogeneity와 별개 layer.
- **Cancer cell hierarchy**: tumor 안에 normal differentiation hierarchy를 닮은 stem-like → intermediate → differentiated cell의 spectrum이 존재한다는 frame.
- **Recurrent program**: 다양한 cancer type에서 반복적으로 관찰되는 expression module (cell cycle, stress, hypoxia, lineage 등). Cancer-universal aspect.
- **CNA inference**: scRNA-seq에서 chromosomal CNA 추정 → malignant vs non-malignant 분리 기준.
- **Cellular plasticity**: cancer cell이 state 사이를 transition할 수 있는 능력. Therapy resistance 기전 중 하나.
