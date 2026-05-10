---
title: "Outer Radial Glia-like Cancer Stem Cells Contribute to Heterogeneity of Glioblastoma"
authors: Aparna Bhaduri, Elizabeth Di Lullo, Diane Jung, Susan Müller, Edmund C. Crouch, Carmen S. Espinosa, Tomasz J. Nowakowski, Aaron Diaz, David R. Raleigh, Arnold R. Kriegstein
year: 2020
doi: 10.1016/j.stem.2019.11.015
source: bhaduri-2020-outer-radial-glia-like-cancer.md
category: brain-development
status: stub
tags: [glioblastoma, oRG, outer-radial-glia, cancer-stem-cell, PTPRZ1, mitotic-somal-translocation, cancer-development-thesis, single-cell, primate-specific]
---

## Summary
**Adult primary GBM의 single-cell tumor atlas에서 outer radial glia (oRG)-like cancer stem cell population을 발견**. 영장류 발달기에만 존재하는 oRG 세포 유형이 GBM에서 reactivate되어 mitotic somal translocation ("jump-and-divide") + invasive behavior을 매개한다. PTPRZ1이 핵심 분자 mediator. **"Cancer는 발달 cell type을 hijack한다"** thesis의 single-cell 결정적 증거. Kriegstein lab (UCSF).

## Key Contributions
- Adult IDH-wt GBM의 single-cell tumor atlas + 정상 fetal cortex 비교
- **oRG-like cancer cell** 발견 — 정상 영장류 oRG의 transcriptional + behavioral signature가 GBM에 reactivate
- **MST (mitotic somal translocation, "jump-and-divide")** behavior live imaging으로 입증
- **PTPRZ1**이 MST + invasive behavior의 핵심 분자 mediator. CRISPR KD로 인과 증명
- Tumor invasive front에 oRG-like cells enrich. 환자 prognosis와 negative correlation
- 정상 성체 cortex에는 oRG signature 사실상 absent → cancer-specific therapeutic target

## Methods & Architecture
- 10x Genomics scRNA-seq, primary IDH-wt GBM 다수 + Pollen/Nowakowski fetal cortex reference
- Live imaging on GBM organoid + GSC culture for MST
- PTPRZ1 CRISPR KD on invasive behavior

## Results
- 모든 분석된 GBM에서 oRG-like signature 검출
- oRG-like cells가 다른 GBM cell type보다 더 invasive
- PTPRZ1 KD → invasion 유의미 감소
- oRG signature 강할수록 환자 prognosis ↓
- 정상 성체 cortex에 oRG signature absent → therapeutic specificity

## Limitations
- IDH-wt GBM만, 다른 brain tumor type 미확인
- oRG-like cancer cell의 actual lineage origin 미해결
- Mouse model 직접 검증 어려움 (영장류 특이 cell type)

## Related Papers
- [[brain-development/lui-2011-development-evolution-human-neocortex]] — oRG foundational review (이 연구의 분자/세포 기반)
- [[brain-development/couturier-2020-single-cell-rna-seq-glioblastoma-recapitulates]] — 자매 paper, GBM이 normal neurodevelopmental hierarchy를 recapitulate
- [[brain-development/wang-2025-molecular-cellular-dynamics]] — Tri-IPC가 GBM과 transcriptome 닮음 (영장류 progenitor의 다른 angle)
- [[brain-development/keefe-2025-lineage-resolved-atlas-developing]] — human cortical progenitor lineage tracing reference
- [[other/suva-tirosh-2019-single-cell-rna-sequencing-cancer]] — cancer cell hierarchy 일반 frame, 본 paper는 그 frame의 GBM/oRG specific instance
- [[neuroscience/tilot-2015-balancing-proliferation-connectivity-pten]] — PTEN dual-phenotype (cancer + ASD), 분자 수준 cancer↔dev dual-use 사례
- [[neuroscience/parenti-2020-neurodevelopmental-disorders-from-genetics-to]] — NDD pathway convergence; PI3K-mTOR axis가 GBM growth와 share
