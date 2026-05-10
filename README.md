# Soeun's Wiki

Personal research wiki maintained by Soeun Park.

Built with [Quartz v4](https://quartz.jzhao.xyz/) and published at **[neurosoeunpark.github.io/wiki](https://neurosoeunpark.github.io/wiki)**.

---

## About

An LLM-assisted wiki for accumulating knowledge from scientific papers — single-cell genomics, neuroscience, brain development, and AI for biology.

Based on [joonan30's LLM Wiki schema](https://gist.github.com/joonan30/cbce305684d079dbe9a3fbaefe4e3959) and [Andrej Karpathy's LLM Wiki pattern](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f): knowledge compounds across sessions rather than being re-derived each time.

## Stats

- **153 papers** across 26 research categories
- **141 source summaries** (structured 7-section format)
- **169 wiki pages** with cross-linked `[[wikilinks]]`

## Categories

| Domain | Categories |
|--------|-----------|
| Single-cell | `single-cell-dl` · `single-cell-foundation` · `single-cell-methylation` |
| Genomics | `genomic-dl` · `gwas` · `long-read` · `lrRNA` |
| Neuroscience | `neuroscience` · `brain-development` · `brain-atlas` |
| Organoids | `organoid` · `brain-development` |
| Methods | `statistics` · `concepts` · `overviews` |
| Biology | `aging` · `meiosis` · `reproductive-biology` · `synapse-evolution` |

## Structure

```
sources/        # 141 LLM-generated paper summaries
wiki/           # 169 wiki pages across 26 categories
papers/         # Original PDFs
```

## Contact

Soeun Park — neuro.soeun.park@gmail.com
