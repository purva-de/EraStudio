# Domain & Email DNS Configuration: `era-designstudio.in`

This document outlines the required DNS records to activate and verify Professional Email (`info@era-designstudio.in`) powered by Secureserver / GoDaddy for the domain **`era-designstudio.in`**.

---

## 1. Domain Overview
- **Domain:** `era-designstudio.in`
- **Primary Business Email:** `info@era-designstudio.in`
- **Mail Service Provider:** Secureserver / GoDaddy Professional Email

---

## 2. Required DNS Records Table

Log in to your domain registrar / DNS provider (e.g., GoDaddy, Cloudflare, Namecheap, BigRock) and add the following records:

### A. TXT Records (Ownership Verification, SPF & DMARC)
| Record Type | Host / Name | Value / Destination | TTL | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **TXT** | `@` | `T2582924` | 1 Hour / Default | Domain ownership verification |
| **TXT** | `@` | `v=spf1 include:secureserver.net -all` | 1 Hour / Default | SPF (prevents email spoofing) |
| **TXT** | `_dmarc` | `v=DMARC1; p=reject; rua=mailto:dmarc_rua@onsecureserver.net; adkim=r; aspf=r;` | 1 Hour / Default | DMARC policy & reporting |

> **Note on SPF:** If your DNS provider does not allow multiple TXT records on `@`, or if you already had an SPF record, replace the existing SPF record with `v=spf1 include:secureserver.net -all`.

---

### B. MX Records (Mail Routing)
> **CRITICAL:** Delete all existing MX records (such as old mail servers or default park records) before adding these, or email delivery will fail.

| Record Type | Host / Name | Priority | Target / Points To | TTL |
| :--- | :--- | :--- | :--- | :--- |
| **MX** | `@` | `0` | `smtp.secureserver.net` | 1 Hour / Default |
| **MX** | `@` | `10` | `mailstore1.secureserver.net` | 1 Hour / Default |

---

### C. CNAME Records (Webmail & DKIM Signatures)
| Record Type | Host / Name | Points To / Target | TTL | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **CNAME** | `email` | `email.secureserver.net` | 1 Hour / Default | Webmail login alias |
| **CNAME** | `secureserver1._domainkey` | `s1.dkim.era-designstudio_in.3ed.onsecureserver.net.` | 1 Hour / Default | DKIM Key 1 (Cryptographic signature) |
| **CNAME** | `secureserver2._domainkey` | `s2.dkim.era-designstudio_in.3ed.onsecureserver.net.` | 1 Hour / Default | DKIM Key 2 (Cryptographic signature) |

> *Tip:* Some DNS dashboards (like GoDaddy or Cloudflare) automatically append your root domain. If your DNS provider does that, ensure the host is just entered as `secureserver1._domainkey` and `secureserver2._domainkey` rather than the fully qualified domain name. Also remove any trailing dot if your panel flags an error.

---

### D. SRV Record (Autodiscover Configuration)
| Port | Protocol | Host / Name | Service | Priority | Weight | Target / Points To | TTL |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `443` | `_tcp` | `@` (or leave blank if required) | `_autodiscover` | `100` | `1` | `autodiscover.secureserver.net` | 1 Hour / Default |

> In GoDaddy / cPanel DNS management, you will see separate fields for:
> - **Service:** `_autodiscover`
> - **Protocol:** `_tcp`
> - **Name:** `@` (or `era-designstudio.in`)
> - **Priority:** `100`
> - **Weight:** `1`
> - **Port:** `443`
> - **Target:** `autodiscover.secureserver.net`

---

## 3. Step-by-Step Implementation Instructions

1. **Sign in to DNS Manager:**
   - Log in to your registrar account where `era-designstudio.in` DNS is managed (e.g. GoDaddy Domain Portfolio -> DNS).
2. **Remove Outdated Mail Records:**
   - Delete any older MX records pointing to previous email providers.
   - Delete any older SPF records that conflict with `include:secureserver.net`.
3. **Add the New Records:**
   - Add the TXT, MX, CNAME, and SRV records listed in the tables above.
4. **Save and Allow Propagation:**
   - Save changes. DNS updates propagate globally within 15 minutes to 24 hours.
5. **Verify with "Check My Settings":**
   - Head back to your email setup portal and click **Check My Settings**.

---

## 4. Verification Commands

You can verify that your records are live from your terminal using `nslookup`:

```bash
# Check MX records
nslookup -type=MX era-designstudio.in

# Check SPF TXT record
nslookup -type=TXT era-designstudio.in

# Check DMARC
nslookup -type=TXT _dmarc.era-designstudio.in

# Check DKIM CNAME
nslookup -type=CNAME secureserver1._domainkey.era-designstudio.in
```
