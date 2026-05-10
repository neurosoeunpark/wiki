---
title: "Outer Radial Glia-like Cancer Stem Cells Contribute to Heterogeneity of Glioblastoma"
authors: Aparna Bhaduri, Elizabeth Di Lullo, Diane Jung, Susan Müller, Edmund C. Crouch, Carmen S. Espinosa, Tomasz J. Nowakowski, Aaron Diaz, David R. Raleigh, Arnold R. Kriegstein
year: 2020
doi: 10.1016/j.stem.2019.11.015
category: brain-development
pdf_path: papers/bhaduri-2020-outer-radial-glia-like-cancer.pdf
pdf_filename: bhaduri-2020-outer-radial-glia-like-cancer.pdf
source_collection: manual
status: stub
---

## One-line Summary
**Adult primary glioblastoma의 single-cell tumor atlas에서 outer radial glia (oRG)-like cancer stem cell population을 발견** — 영장류 발달기에만 존재하는 oRG 세포 유형이 GBM에서 reactivate되어 mitotic somal translocation ("jump-and-divide") + invasive behavior을 매개한다. PTPRZ1이 이 phenotype의 핵심 분자. **"Cancer는 발달 cell type을 hijack한다"** thesis의 가장 결정적 single-cell 증거 중 하나.

## 1. Document Info
- Journal: Cell Stem Cell (26(1):48-63.e6)
- Published: 2020-01-02
- Affiliations: Bhaduri, Di Lullo, Jung, Nowakowski, Diaz, Raleigh, Kriegstein — UCSF Eli & Edythe Broad Center of Regeneration Medicine + Department of Neurology / Neurosurgery
- Type: Original research (Article)

## 2. Key Contributions
- Adult IDH-wt GBM의 **single-cell tumor atlas** 구축 (총 patient-derived tumor 다수 vs developing human cortex 비교)
- **oRG-like cancer cell** 발견 — 정상 발달기 영장류 cortex에서만 보이는 outer radial glia의 transcriptional + behavioral signature가 GBM에 reactivate
- **Mitotic somal translocation (MST, "jump-and-divide")** behavior 확인 — oRG의 trademark cell biology가 GBM에서도 일어남. Live imaging으로 입증.
- **PTPRZ1**이 MST + invasive behavior의 핵심 분자 mediator. 정상 oRG에서 PTPRZ1+ → GBM oRG-like population에서도 PTPRZ1+
- 이 population이 GBM의 **invasive front**에 enrich → migration/dissemination에 결정적 역할
- **임상 의미**: PTPRZ1이 GBM-specific therapeutic target 후보 (정상 성체 cortex에는 거의 없으니 specificity 확보)

## 3. Methods & Architecture
- **scRNA-seq**: 10x Genomics platform, primary GBM 환자 sample 다수 + 정상 fetal cortex (Pollen / Nowakowski 2017 reference data)
- **Cell type annotation**: 정상 cortical reference의 cell type signature (oRG, IPC, neuron, astrocyte 등) 를 GBM cells에 mapping
- **Live imaging**: GBM-derived organoid + glioblastoma stem cell (GSC) culture에서 mitotic somal translocation 촬영
- **CRISPR knockdown**: PTPRZ1 KD → MST + invasive behavior 감소 입증
- **Spatial validation**: tumor section에서 oRG-like marker (PTPRZ1+) 의 invasive front enrichment 확인

## 4. Key Results & Benchmarks
- 모든 분석된 GBM에서 oRG-like signature 검출
- oRG-like cells가 다른 GBM cell type보다 더 invasive (live imaging quantification)
- PTPRZ1 KD GBM에서 invasion 유의미 감소
- oRG-like signature가 환자 prognosis와 연관 (높을수록 더 나쁨)
- 정상 성체 cortex에서는 oRG signature 사실상 absent → cancer-specific 표적

## 5. Limitations & Future Work
- IDH-wt GBM만 — IDH-mutant glioma + 다른 brain tumor에서도 같은지 미확인
- oRG-like cancer cell의 actual lineage origin 미해결 (정상 oRG에서 직접 transformation? Or 다른 progenitor가 oRG state로 reactivation?)
- PTPRZ1 targeting drug 임상 적용 가능성 — preclinical 단계
- 영장류 특이 cell type이라 mouse model에서 직접 검증 어려움

## 6. Related Work
- Lui, Hansen, Kriegstein 2011 Cell — oRG foundational review (이 연구의 분자/세포 기반)
- Hansen et al. 2010 Nature — oRG 첫 발견 (영장류 OSVZ proliferation)
- Pollen, Nowakowski et al. 2015/2017 — single-cell developing human cortex reference data
- Patel et al. 2014 Science — single-cell GBM 첫 study (이 연구의 기술적 선구)
- Wang et al. 2025 Nature — Tri-IPC, GBM ↔ developmental progenitor 연결의 더 일반적 frame
- Couturier et al. 2020 Nat Commun — 자매 paper, GBM이 normal neurodevelopmental hierarchy를 recapitulate
- Suva & Tirosh 2019 — cancer cell hierarchy ↔ developmental hierarchy thesis 정리

## 7. Glossary
- **oRG (outer radial glia)**: 영장류/사람 OSVZ에 풍부한 progenitor 세포. Apical attachment 없이 basal fiber만 가짐. **Mitotic somal translocation (MST)** 으로 분열 — 분열 직전 세포체가 basal direction으로 jump한 후 분열. 영장류 cortex 확장의 분자 기반.
- **MST (Mitotic somal translocation)**: oRG의 trademark cell biology. "Jump-and-divide". GBM에서도 관찰됨.
- **PTPRZ1**: Receptor protein tyrosine phosphatase, zeta 1. oRG marker + MST mediator. GBM에서 invasion driver.
- **GSC (Glioblastoma stem cell)**: GBM의 stem-like sub-population. 치료 저항성 + 재발의 원천. 본 paper의 oRG-like cells가 GSC와 일부 overlap.
- **IDH-wt**: Isocitrate dehydrogenase wild-type. 가장 흔하고 공격적인 adult GBM subtype.
