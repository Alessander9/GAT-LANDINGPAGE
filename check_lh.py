import json

with open('./lighthouse-report.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

print('=== AUDIT OPPORTUNITIES & DIAGNOSTICS ===')
for aud_id, aud in data.get('audits', {}).items():
    sc = aud.get('score')
    if sc is not None and sc < 0.9:
        print(f"[{aud_id}] {aud.get('title')}: {aud.get('displayValue', '')} (score: {sc})")
        if aud.get('details', {}).get('items'):
            for item in aud['details']['items'][:3]:
                print(f"  -> {item}")
