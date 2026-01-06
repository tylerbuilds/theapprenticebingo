# Security Policy

## Reporting Security Vulnerabilities

We take the security of Apprentice Bingo seriously. If you discover a security vulnerability, please report it responsibly.

### How to Report

**Do NOT** open a public issue for security vulnerabilities.

Instead, please send an email to: **security@tylerbuilds.com** (or use GitHub's private vulnerability reporting)

Please include:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if known)

### What to Expect

- We will acknowledge receipt of your report within 48 hours
- We will provide a detailed response within 7 days
- We will work with you to understand and resolve the issue
- Once fixed, we will credit you in the release notes (if you wish)

## Supported Versions

Currently supported versions with security updates:

| Version | Supported          |
|---------|-------------------|
| 2026.x  | :white_check_mark: Yes |

## Security Best Practices

### For Users

1. **Keep Your Browser Updated**
   - Use the latest version of your browser
   - Enable automatic updates

2. **Use Strong Passwords**
   - If you implement authentication, use strong, unique passwords

3. **Check URLs**
   - Ensure you're on the official site: `apprentice-bingo.tylerbuilds.com`
   - Look for the HTTPS padlock icon

4. **Report Suspicious Activity**
   - If something seems wrong, report it immediately

### For Developers

1. **Never Commit Secrets**
   - Don't commit API keys, passwords, or tokens
   - Use environment variables (`.env.local`)
   - The `.env` file is in `.gitignore`

2. **Keep Dependencies Updated**
   ```bash
   npm audit
   npm audit fix
   ```

3. **Follow Secure Coding Practices**
   - Validate user input
   - Sanitize data before rendering
   - Use TypeScript for type safety
   - Keep dependencies up to date

4. **Test for Vulnerabilities**
   - Use `npm audit` regularly
   - Review dependency updates
   - Test authentication (if implemented)

## Current Security Features

### What We Do

- ✅ **No Server-Side Storage** - We don't store personal data
- ✅ **HTTPS Only** - All traffic is encrypted
- ✅ **No Authentication Required** - Reduces attack surface
- ✅ **Client-Side Only** - Game state is local to your browser
- ✅ **Regular Dependency Updates** - We keep packages updated
- ✅ **TypeScript** - Type safety reduces bugs
- ✅ **Content Security Policy** - Headers configured for security

### What We Don't Do

- ❌ Collect personal information
- ❌ Use cookies for tracking
- ❌ Store data on servers
- ❌ Require authentication
- ❌ Use third-party analytics

## Dependency Security

We regularly audit our dependencies:

```bash
npm audit
npm audit fix
```

Current dependencies are scanned for:
- Known vulnerabilities (CVEs)
- Outdated packages
- Suspicious packages

## Exposure Prevention

### Secrets Management

- All secrets are stored in environment variables
- `.env` files are excluded from git
- Example file provided: `.env.example`
- Never commit real credentials

### Code Review

All code changes are reviewed for:
- Security vulnerabilities
- Best practices
- Potential issues

## Secure Development Guidelines

When contributing, please:

1. **Input Validation**
   - Validate all user input
   - Sanitize data before use
   - Use TypeScript for type safety

2. **XSS Prevention**
   - Don't use `dangerouslySetInnerHTML` unless necessary
   - Sanitize HTML if rendering user content
   - Use React's built-in escaping

3. **HTTPS Only**
   - All resources loaded over HTTPS
   - No mixed content
   - Valid SSL certificates

4. **Third-Party Code**
   - Review all dependencies
   - Keep them updated
   - Remove unused dependencies

## Security Advisories

We will publish security advisories for:
- High/Critical severity issues
- Required security updates
- Best practice recommendations

Stay informed by:
- ⭐ Watching this repository
- 👀 Checking the Security tab
- 📧 Subscribing to announcements (future)

## Responsible Disclosure

We believe in responsible disclosure:
- Give us time to fix the issue
- Don't disclose publicly until fixed
- Work with us on a timeline
- Credit for your discovery

## Contact

For security-related questions:
- 📧 Email: security@tylerbuilds.com
- 🔒 GitHub: Use private vulnerability reporting
- ⚠️ Issues: Do NOT open public issues for security bugs

## Resources

- [GitHub Security](https://github.com/security)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Next.js Security](https://nextjs.org/docs/app/building-your-application/configuring/security)

---

**Thank you for helping keep Apprentice Bingo secure!** 🔒
