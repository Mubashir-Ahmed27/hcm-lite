# Assumptions

- Tax uses contractual gross × 12 before attendance deductions.
- Company-local dates use the configured timezone, defaulting to `Asia/Karachi`.
- The frontend never includes seed/demo data. Test data exists only in automated tests.
- AI is provider-adaptable; live Gemini calling requires `AI_API_KEY`. The safe fallback remains available when no provider is configured.
- Geofencing is intentionally deferred until the required flows are fully verified.
