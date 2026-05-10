---
title: "Cancer ↔ Development: Tumors as Hijacked Developmental Programs"
type: overview
created: 2026-05-10
category: overviews
tags: [cancer, development, glioblastoma, oRG, Tri-IPC, PTEN, CHD8, NF1, mTOR, tumor-suppressor, developmental-hierarchy, primate-specific, framework, synthesis]
papers:
  - brain-development/bhaduri-2020-outer-radial-glia-like-cancer
  - brain-development/couturier-2020-single-cell-rna-seq-glioblastoma-recapitulates
  - brain-development/lui-2011-development-evolution-human-neocortex
  - brain-development/wang-2025-molecular-cellular-dynamics
  - brain-development/keefe-2025-lineage-resolved-atlas-developing
  - other/suva-tirosh-2019-single-cell-rna-sequencing-cancer
  - neuroscience/tilot-2015-balancing-proliferation-connectivity-pten
  - neuroscience/villa-2022-chd8-haploinsufficiency
  - neuroscience/parenti-2020-neurodevelopmental-disorders-from-genetics-to
  - neuroscience/gordon-2026-developmental-convergence-and-divergence
  - drug-resistance/xu-2026-mapping-convergent-regulators-of
---

## Why This Overview Exists

신경발달 분야와 종양학 분야는 표면적으로 매우 다른 학문 같다 — 한쪽은 "어떻게 정상 회로가 만들어지나"를 묻고, 다른 쪽은 "어떻게 비정상적 증식이 일어나나"를 묻는다. 하지만 두 분야의 분자/세포 수준 데이터를 single-cell 시대 이후 보면, 같은 유전자, 같은 cell type signature, 같은 pathway가 양쪽에서 반복적으로 등장한다. 이는 우연이 아니다.

이 overview의 핵심 thesis:

> **"암"은 본질적으로 "잘못된 시점에 reactivate된 발달 program"이다. Oncogene = 정상적으로는 progenitor proliferation regulator. Tumor suppressor = 정상적으로는 differentiate-and-stop signal. Cancer = 발달 toolkit이 부적절하게 다시 켜진 상태.**

이 thesis가 설명하는 두 가지 큰 임상 puzzle:

1. **왜 PTEN, CHD8, NF1, TSC1/2 같은 유전자가 cancer 위험인 동시에 ASD/NDD 위험인가?** — 같은 유전자가 progenitor 단계에서 잘못되면 ASD, 성체 조직에서 잘못되면 cancer.
2. **왜 glioblastoma transcriptome이 fetal brain progenitor와 그렇게 닮아있는가?** — GBM cell이 oRG / Tri-IPC 같은 발달 progenitor state로 stuck된 것.

이 thesis는 본 wiki의 6편 paper cluster + 기존 NDD entries를 통해 단단해진다:

- [[brain-development/bhaduri-2020-outer-radial-glia-like-cancer|Bhaduri et al. 2020]] — **GBM에 oRG-like cancer stem cell 발견**. 영장류 발달기 oRG의 transcriptome + behavioral signature (mitotic somal translocation) 가 GBM에 reactivate. PTPRZ1이 핵심 mediator.
- [[brain-development/couturier-2020-single-cell-rna-seq-glioblastoma-recapitulates|Couturier et al. 2020]] — title 자체가 thesis: **GBM이 normal neurodevelopmental tri-lineage hierarchy를 recapitulate**. Glial progenitor-like cell이 hierarchy apex.
- [[brain-development/lui-2011-development-evolution-human-neocortex|Lui, Hansen, Kriegstein 2011]] — oRG / OSVZ의 foundational review. Cancer↔dev cluster의 dev-side reference.
- [[brain-development/wang-2025-molecular-cellular-dynamics|Wang et al. 2025]] — **Tri-IPC** (영장류 신경↔교 transition progenitor) 가 GBM transcriptome과 닮음. 영장류-specific dev progenitor가 cancer hijack 표적.
- [[other/suva-tirosh-2019-single-cell-rna-sequencing-cancer|Suvà & Tirosh 2019]] — **cancer cell hierarchy ↔ developmental hierarchy** thesis 일반 review (다양한 tumor type 종합). Cluster의 umbrella.
- [[neuroscience/tilot-2015-balancing-proliferation-connectivity-pten|Tilot, Frazier, Eng 2015]] — **PTEN dual-phenotype** (Cowden 암 + ASD with macrocephaly) 의 임상 + 분자 review. 같은 mTOR pathway hyperactivation이 두 표현형의 공통 기반.

기존 wiki의 추가 evidence:
- [[neuroscience/villa-2022-chd8-haploinsufficiency|Villa et al. 2022]] — **CHD8 haploinsufficiency** 가 cortical organoid에서 macrocephaly + E/I imbalance 만듦. CHD8은 동시에 대장암 빈번 변이.
- [[neuroscience/parenti-2020-neurodevelopmental-disorders-from-genetics-to|Parenti & Novarino 2020]] — NDD 3 pathway convergence 중 **PI3K-mTOR axis**가 PTEN, TSC, NF1, DEPDC5 — 모두 dual-phenotype gene.
- [[neuroscience/gordon-2026-developmental-convergence-and-divergence|Gordon et al. 2026]] — **M5 chromatin/TF regulator complex** (SMARCA4, SMARCB1, EP300, TP53) 가 70 ASD organoid에서 late convergence 매개. 이들 다수가 tumor suppressor이기도 함.
- [[drug-resistance/xu-2026-mapping-convergent-regulators-of|Xu et al. 2026 PerturbFate]] — 멜라노마 drug resistance가 동일한 undifferentiated state로 수렴 (FOSL1+/KLF5+/RREB1+/SMAD3+ TF hub). 같은 convergence 원리가 cancer-side에서 작동.

이 cluster가 본 wiki에서 흩어져 있던 cancer-related + dev-related entries를 처음으로 단일 thesis 아래 묶는다.

## Part I — The Thesis: Cancer = Stuck Developmental Biology

가장 핵심적인 한 문장:

> **진화는 "발달용 toolkit"과 "암 억제 toolkit"을 따로 만들지 않았다. 같은 도구 (proliferation regulator, differentiation switch, migration cue) 를 양방향 (proliferate vs stop) 으로 fine-tune해서 쓰고, 그 fine-tuning이 잘못되면 발달 시점에는 NDD, 성체 시점에는 cancer가 된다.**

이게 왜 우아한 frame인지:

1. **진화의 절약**: 새 분자 시스템 발명 비용이 크다. 발달과 종양 억제는 둘 다 "세포 증식을 정밀하게 통제해야 하는" 문제다 → 같은 분자로 둘 다 처리하는 게 효율적.
2. **임상의 패턴 설명**: PTEN이 동시에 가장 흔한 tumor suppressor + ASD with macrocephaly 위험 유전자라는 사실은 우연이 아니라 frame의 prediction.
3. **치료의 cross-application 가능성**: cancer drug (mTOR inhibitor) 가 ASD에 작용 가능. ASD-rescue drug이 cancer에 영향. Trade-off가 frame의 prediction.
4. **Tumor heterogeneity 설명**: GBM 안의 cell-to-cell 다양성이 무작위가 아니라 발달 hierarchy를 닮은 구조 (Couturier 2020) — frame이 예측.

이 frame이 옳다면 두 가지 강력한 prediction:
- (A) **dual-phenotype gene이 풍부해야 한다** (cancer + NDD 양쪽에서 risk gene으로 등장) — PTEN, CHD8, NF1, TSC, APC가 입증.
- (B) **cancer transcriptome이 발달 progenitor signature를 닮아야 한다** — Bhaduri 2020 (oRG-like GBM), Couturier 2020 (tri-lineage hierarchy), Wang 2025 (Tri-IPC ↔ GBM) 가 입증.

## Part II — Glioblastoma as the Clearest Case

GBM이 cancer↔dev thesis의 가장 명확한 사례인 이유 — 정상 발달 cell type과 transcriptome이 거의 1:1 매칭된다.

### Bhaduri 2020 — oRG-like cancer stem cells

[[brain-development/bhaduri-2020-outer-radial-glia-like-cancer]]:
- IDH-wt GBM 단일세포에서 영장류 발달기 oRG와 transcriptome + behavior 매칭되는 population 발견
- **MST (mitotic somal translocation, "jump-and-divide")** — 정상 oRG의 trademark 분열 방식이 GBM에서도 일어남 (live imaging 증명)
- **PTPRZ1**이 정상 oRG와 GBM oRG-like cells 모두에서 분자 driver
- 이 population이 invasive front에 enrich → GBM의 dissemination 메커니즘
- 정상 성체 cortex에 oRG signature absent → cancer-specific therapeutic specificity 가능

### Couturier 2020 — tri-lineage hierarchy recapitulation

[[brain-development/couturier-2020-single-cell-rna-seq-glioblastoma-recapitulates]]:
- Title 자체가 thesis: GBM이 normal neurodevelopmental hierarchy를 recapitulate
- 53,586 GBM cells × 22,637 fetal brain cells 비교
- **Conserved tri-lineage cancer hierarchy**: glial progenitor-like (apex) → neuronal-like / astrocytic-like / oligodendrocytic-like 세 갈래
- RNA velocity로 progenitor가 originator임을 증명
- Progenitor population = functional GSC (glioblastoma stem cell)

### Wang 2025 — Tri-IPC ↔ GBM 영장류 connection

[[brain-development/wang-2025-molecular-cellular-dynamics]]:
- 영장류 신경↔교 transition 시기의 **tripotential intermediate progenitor (Tri-IPC)** — GABA neuron + OPC + astrocyte 동시 생성
- Tri-IPC의 transcriptome과 GBM transcriptome이 strikingly similar
- 즉 **GBM은 영장류 특이 transition progenitor state로 stuck된 cell**

### 종합

세 paper의 그림:
```
정상 영장류 발달:
  Tri-IPC (Wang 2025) ← OSVZ progenitor pool (Lui 2011)
     ├→ GABA interneuron
     ├→ OPC → oligodendrocyte
     └→ astrocyte
  oRG (Bhaduri 2020) ← OSVZ에서 MST로 분열
     └→ neuron (영장류 cortex 확장)

GBM:
  oRG-like cancer cell (Bhaduri 2020) — MST로 분열, PTPRZ1+
  Glial progenitor-like cell (Couturier 2020) — tri-lineage apex
  Tri-IPC-like cell (Wang 2025) — GABA/OPC/astrocyte signature 혼재

→ GBM = 영장류 특이 발달 progenitor state로 frozen된 cell
```

이게 cancer↔dev thesis의 가장 직접적 증거다.

## Part III — Suvà & Tirosh의 General Framework

[[other/suva-tirosh-2019-single-cell-rna-sequencing-cancer]] 가 GBM-specific 사례를 일반화한다:

> **여러 cancer type에서 반복적으로 관찰되는 expression intra-tumor heterogeneity (eITH) pattern의 핵심은 정상 발달 lineage program의 dysregulated reactivation이다.**

다양한 cancer에서 같은 pattern:
- **IDH-mutant glioma** (Tirosh 2016): tri-lineage (oligodendrocyte / astrocyte / progenitor)
- **H3-K27M 소아 glioma** (Filbin 2018): OPC state로 stuck
- **멜라노마** (Tirosh 2016a): AXL-high invasive vs MITF-high differentiated — 정상 melanocyte differentiation axis의 양 끝
- **Head & neck cancer** (Puram 2017): epithelial → partial-EMT → differentiated — 정상 EMT program hijack

→ GBM 사례가 universal pattern. **모든 cancer가 어느 정도는 발달 program에 stuck**.

이 frame이 또한 [[drug-resistance/xu-2026-mapping-convergent-regulators-of|Xu 2026 PerturbFate]] 의 melanoma drug resistance 결과와 직접 연결된다 — 140+ resistance gene이 단일 undifferentiated state로 수렴. 같은 cancer↔dev convergence 원리.

## Part IV — Dual-Phenotype Genes: Cancer + NDD Co-occurrence

Cancer↔dev thesis가 임상으로 직접 만나는 지점은 **같은 유전자가 두 시점에 두 표현형을 일으킨다**는 사실이다.

### PTEN — 가장 명확한 사례

[[neuroscience/tilot-2015-balancing-proliferation-connectivity-pten]]:
- PTEN = PI3K/Akt/mTOR pathway의 negative regulator
- Loss-of-function 결과:
  - **성체 조직**: Cowden syndrome + 다종 cancer (유방, 갑상선, 자궁내막 등)
  - **발달 시점**: macrocephaly + ASD + 인지 결함 (PHTS - PTEN hamartoma tumor syndrome)
- 분자 mechanism 동일: mTOR hyperactivation → protein synthesis ↑
  - 성체 조직에서: 무한 증식 → tumor
  - 발달 뉴런에서: dendrite/spine/axon overgrowth → 잘못 connected cortex
- 치료 또한 동일: **mTOR inhibitor (rapamycin, everolimus)** 가 양쪽에 작용. Cancer 임상에 이미 사용 + PHTS+ASD 임상시험 진행 중

### CHD8 — 두 번째 명확한 사례

[[neuroscience/villa-2022-chd8-haploinsufficiency]]:
- CHD8 = chromatin remodeler
- Loss-of-function 결과:
  - **성체 대장**: 대장암에서 빈번 변이 (chromatin instability)
  - **발달 시점**: macrocephaly + ASD (de novo variant 빈도 가장 높은 ASD risk gene 중 하나)
- 같은 chromatin remodeling 결함이 두 시점에 다른 표현형을 만듦
- Villa 2022: organoid에서 macrocephaly-like + accelerated inhibitory + delayed excitatory neuron + mRNA splicing 결함

### 다른 dual-phenotype 유전자들

| 유전자 | Cancer 표현형 | NDD/dev 표현형 | 분자 mechanism |
|---|---|---|---|
| **PTEN** | Cowden syndrome, 다종 cancer | PHTS, macrocephaly, ASD | mTOR hyperactivation |
| **CHD8** | 대장암 | ASD (high de novo) | chromatin remodeling 결함 |
| **NF1** | Neurofibromatosis tumors | 인지 결함, ASD comorbidity | Ras pathway hyperactivation |
| **TSC1 / TSC2** | Tuberous sclerosis tumors | ASD comorbidity 매우 높음, epilepsy | mTOR hyperactivation |
| **APC / β-catenin** | 대장암 | Wnt signaling 결함, hippocampal hem 발달 결함 | Wnt pathway dysregulation |
| **SHH / PTCH1** | Medulloblastoma, basal cell carcinoma | Holoprosencephaly | SHH pathway dysregulation |
| **MYCN** | Neuroblastoma amplification | neural progenitor 과증식 | Myc pathway |
| **CHD7** | 다종 cancer | CHARGE syndrome, neural crest 결함 | chromatin remodeling 결함 |

[[neuroscience/parenti-2020-neurodevelopmental-disorders-from-genetics-to|Parenti & Novarino 2020]] 가 정리한 NDD pathway convergence 3축 중 **PI3K-mTOR axis (PTEN, TSC1/2, DEPDC5, NF1)** 와 **chromatin/epigenetic axis (CHD8, ARID1B, SETD5, MECP2)** 가 거의 전부 dual-phenotype 유전자다 — 우연이 아니라 cancer↔dev thesis의 prediction.

## Part V — How Convergence Works in Both Directions

Cancer 분야와 NDD 분야가 별도로 발견한 두 convergence pattern이 사실은 같은 frame의 두 face다.

### Cancer convergence (Suvà & Tirosh, Xu 2026)

- **수많은 다른 driver mutation → 비교적 적은 수의 cell state로 수렴** (Hanahan & Weinberg 10 hallmarks)
- 멜라노마 drug resistance 140+ gene → 단일 undifferentiated state ([[drug-resistance/xu-2026-mapping-convergent-regulators-of|Xu 2026 PerturbFate]])
- GBM의 다양한 genomic alteration → tri-lineage hierarchy ([[brain-development/couturier-2020-single-cell-rna-seq-glioblastoma-recapitulates|Couturier 2020]])

### NDD convergence (Parenti, Gordon, Paulsen)

- **수많은 다른 NDD risk gene → 3 pathway family로 수렴** ([[neuroscience/parenti-2020-neurodevelopmental-disorders-from-genetics-to|Parenti 2020]]: PI3K-mTOR + chromatin + synaptic)
- 8 ASD genes → late convergence to M5 chromatin/TF regulator complex ([[neuroscience/gordon-2026-developmental-convergence-and-divergence|Gordon 2026]])
- 3 ASD genes → asynchronous GABA vs excitatory development ([[neuroscience/paulsen-2022-autism-genes-converge|Paulsen 2022]])

### 같은 frame의 두 face

```
수많은 input 변이
        ↓
    [bottleneck]
   = 정상 발달의 limited 수의 attractor state
        ↓
같은 cell state cluster
   ├→ 잘못된 시점에 발생 → NDD
   └→ 잘못된 조직에서 발생 → cancer
```

이 frame이 [[overviews/convergence-heterogeneity-cascade-frame]] 의 cascade-level convergence 와 [[overviews/convergent-regulation-across-systems]] 의 multi-system convergence 를 cancer-dev axis로 통합한다.

## Part VI — 영장류 / 사람 dimension

[[brain-development/lui-2011-development-evolution-human-neocortex|Lui 2011]] 가 정립한 영장류 OSVZ + oRG biology가 cancer↔dev thesis에 critical layer를 추가한다:

- 영장류/사람 cortex는 mouse에 없는 **추가 progenitor (oRG, Tri-IPC)** 가 있다.
- 이 progenitor들이 **GBM에 reactivate되는 specific cell types** ([[brain-development/bhaduri-2020-outer-radial-glia-like-cancer|Bhaduri 2020]] oRG-like + [[brain-development/wang-2025-molecular-cellular-dynamics|Wang 2025]] Tri-IPC-like).
- 즉 **GBM은 일정 부분 영장류 특이 cancer** — mouse model로 완전히 재현 안 됨.
- 마찬가지로 [[brain-development/keefe-2025-lineage-resolved-atlas-developing|Keefe 2025]] 가 보여준 사람 progenitor의 lineage tracing이 mouse와 다른 점들이 NDD 양상에도 반영됨.

이 영장류 dimension이 [[overviews/transcriptional-heterogeneity-as-developmental-mechanism]] 에서 짚인 *"마우스→사람 translation gap"* 의 cancer-side counterpart다. **마우스 cancer model로 안 잡히는 사람 GBM 양상의 일부 = 마우스에 없는 oRG / Tri-IPC 의 hijack**.

## Part VII — Therapeutic Implications

Cancer↔dev thesis가 옳다면, 두 분야의 치료가 cross-pollinate될 수 있다.

### Cancer drug → NDD treatment

- **mTOR inhibitor (rapamycin, everolimus)**: TSC tuberous sclerosis 임상에 이미 사용. PTEN-PHTS+ASD 임상시험 진행 중 ([[neuroscience/tilot-2015-balancing-proliferation-connectivity-pten|Tilot 2015]]).
- 이론적으로 같은 PI3K/mTOR axis 결함을 가진 NDD에 적용 가능
- 단 cell-type + developmental window specificity 확보 필요

### NDD insight → Cancer therapy

- ASD organoid에서 발견된 **M5 chromatin regulator complex** ([[neuroscience/gordon-2026-developmental-convergence-and-divergence|Gordon 2026]]: SMARCA4, SMARCB1, EP300, TP53) 다수가 tumor suppressor
- 이들 regulator의 cell-type-specific dependency를 NDD organoid에서 mapping → cancer therapy target 발굴 가능

### oRG-targeting GBM drug ([[brain-development/bhaduri-2020-outer-radial-glia-like-cancer|Bhaduri 2020]])

- PTPRZ1이 정상 성체 cortex에 absent → cancer-specific therapeutic specificity
- 단 발달기 진단 시 사용은 위험 (정상 oRG도 영향)

### Trade-off의 frame

같은 cascade를 양방향으로 modulate하기 때문에:
- mTOR inhibitor가 ASD에 도움 → 동시에 cancer 위험 줄임 (PI3K-mTOR pathway 같이 차단)
- 하지만 PTEN restoration이 cancer 치료 → ASD에 새 dysregulation? 이론적 가능성

이 trade-off의 정밀한 이해가 cancer↔dev frame의 임상 응용에 핵심.

## Part VIII — Cross-Wiki Connections

**"같은 toolkit, 다른 axis" 삼부작** — 본 overview는 다음 두 자매와 함께 "발달 toolkit이 multi-purpose system"이라는 더 큰 frame의 한 축이다:

- 본 overview = **정상 발달 × cancer hijack** axis (조직/시점 axis)
- [[overviews/molecular-reuse-dev-plasticity]] = **발달 × 성체 plasticity** axis (시간 axis) — 같은 cascade가 발달 wiring과 adult LTP에 재배치
- [[overviews/evolution-disease-axis-crossing-patterns]] = **진화 × 질병** axis (역사 axis) — 진화가 위로 튜닝한 회로와 질병이 망가뜨리는 회로의 교차 패턴

세 overview에서 같은 유전자/cascade가 반복 등장하는 건 (PTEN, mTOR pathway, oRG/Tri-IPC progenitor signature, NOTCH 등) redundancy가 아니라 frame의 prediction이다.

**그 외 관련 overview**:
- **[[overviews/convergent-regulation-across-systems]]** — multi-system convergence frame. 본 overview는 그 convergence가 cancer + NDD 양쪽에 동시 적용되는 special case.
- **[[overviews/convergence-heterogeneity-cascade-frame]]** — cascade-level convergence + heterogeneity. 본 overview는 그 frame의 cancer-NDD 두 출구를 통합.
- **[[overviews/transcriptional-heterogeneity-as-developmental-mechanism]]** — heterogeneity as developmental mechanism. 본 overview는 그 heterogeneity가 cancer로 hijack되는 방식 추가.
- **[[overviews/cell-identity-programs-and-trajectories]]** — drift field 관점. 본 overview의 cancer = drift field의 잘못된 attractor에 stuck된 cell state.

## Closing — The Big Frame

이 cluster가 정립하는 한 줄 thesis:

> **암은 잘못된 시점에 reactivate된 발달 program이다. 같은 분자 도구 (PTEN/mTOR, CHD8/chromatin, oRG/Tri-IPC progenitor signature) 가 발달 시점에 잘못되면 NDD, 성체 시점에 잘못되면 cancer가 된다. 두 표현형은 같은 frame의 두 face이고, 그래서 두 분야의 치료 + 통찰이 cross-pollinate될 수 있다.**

이게 paradigm-shift level의 통찰인 이유:
- **분자 수준**: 같은 dual-phenotype gene (PTEN, CHD8, NF1, TSC, APC, SHH 등) 이 cancer + NDD risk gene 양쪽으로 등장.
- **세포 수준**: GBM이 oRG / Tri-IPC 같은 영장류 발달 progenitor state로 stuck. 멜라노마가 melanocyte differentiation axis로 stuck.
- **회로 수준**: cancer hierarchy가 normal developmental hierarchy를 recapitulate (Couturier 2020).
- **임상 수준**: mTOR inhibitor가 cancer + ASD 양쪽 임상에 적용 가능. cross-application의 frame.
- **진화 수준**: 진화의 절약 — 발달 toolkit과 cancer suppression toolkit이 같은 도구. fine-tuning이 잘못되면 두 시점에 두 결과.
- **임상 종양학 ↔ 정신의학의 만남**: 본질적으로 같은 분자 사슬을 다른 organ + 시점에서 보는 것.

본 wiki의 cancer-related (drug-resistance, brain-development cancer entries) + NDD-related (neuroscience, brain-development) entries가 이 framework 안에서 읽히면 산발적 발견이 하나의 통합된 분자 이야기로 짜인다. **본 cluster (Bhaduri 2020 + Couturier 2020 + Wang 2025 + Lui 2011 + Suvà & Tirosh 2019 + Tilot 2015) 가 그 framework의 정초**.

자매 overview [[overviews/molecular-reuse-dev-plasticity]] 가 같은 toolkit이 시간 axis (발달 vs adult) 에 재배치되는 측면을 다룬다면, 본 overview는 같은 toolkit이 조직/시점 axis (정상 발달 vs cancer hijack) 에 재배치되는 측면을 다룬다. 두 overview를 함께 읽으면 발달 toolkit이 결국 multi-use generic system이라는 더 큰 frame이 보인다.

---

### 다음 enrichment 후보

본 cluster에서 빠진 canonical paper들:
- **Patel et al. 2014 Science** — single-cell GBM의 foundational paper. eITH discovery + IDH-mutant glioma single-cell baseline. (Bhaduri 2020 + Couturier 2020 모두 build-on)
- **Tirosh et al. 2016 Nature** — IDH-mutant glioma single-cell + tri-lineage hierarchy 정립. Suvà & Tirosh review의 핵심 evidence.
- **Filbin et al. 2018 Science** — H3-K27M 소아 glioma의 OPC-stuck state. 소아 brain tumor cancer↔dev 사례.
- **Hanahan & Weinberg 2011 Cell** — "Hallmarks of Cancer" — 본 overview thesis의 broader cancer biology foundation.
- **NF1 ASD/cancer dual-phenotype paper** — Hyman 등의 NF1 review. PTEN과 평행한 사례 강화.

이들이 추가되면 cancer-side evidence base가 더 deep해진다. 우선순위에 따라 후속 ingest batch가 가능하다.
