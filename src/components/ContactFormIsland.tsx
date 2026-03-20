import { type FormEvent, useMemo, useState } from "react";

type FormState = {
  name: string;
  email: string;
  organization: string;
  objective: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  organization: "",
  objective: ""
};

export default function ContactFormIsland() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const isValid = useMemo(() => {
    const hasValues =
      form.name.trim().length > 1 &&
      form.organization.trim().length > 1 &&
      form.objective.trim().length > 10;

    const looksLikeEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());

    return hasValues && looksLikeEmail;
  }, [form]);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isValid) return;

    setSubmitted(true);
    setForm(initialState);
  };

  return (
    <div className="surface-card bg-white">
      <h3 className="mb-2 text-2xl">Secure Your Strategy Session</h3>
      <p className="mb-6 text-sm text-plumNoir/70">
        Share your objective and we will return a conversion-first execution plan.
      </p>

      <form className="grid gap-4" onSubmit={onSubmit} noValidate>
        <input
          value={form.name}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, name: event.target.value }))
          }
          placeholder="Your name"
          className="rounded-xl border border-plumNoir/20 bg-cloudDancer px-4 py-3 text-sm outline-none transition focus:border-plumNoir"
          aria-label="Your name"
          required
        />
        <input
          type="email"
          value={form.email}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, email: event.target.value }))
          }
          placeholder="Work email"
          className="rounded-xl border border-plumNoir/20 bg-cloudDancer px-4 py-3 text-sm outline-none transition focus:border-plumNoir"
          aria-label="Work email"
          required
        />
        <input
          value={form.organization}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, organization: event.target.value }))
          }
          placeholder="Organization"
          className="rounded-xl border border-plumNoir/20 bg-cloudDancer px-4 py-3 text-sm outline-none transition focus:border-plumNoir"
          aria-label="Organization"
          required
        />
        <textarea
          value={form.objective}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, objective: event.target.value }))
          }
          placeholder="What transformation do you need in the next 90 days?"
          rows={5}
          className="rounded-xl border border-plumNoir/20 bg-cloudDancer px-4 py-3 text-sm outline-none transition focus:border-plumNoir"
          aria-label="Objective"
          required
        />

        <button
          type="submit"
          className="cta-pill w-full disabled:cursor-not-allowed disabled:opacity-40"
          disabled={!isValid}
        >
          Request Priority Review
        </button>

        {submitted && (
          <p className="rounded-lg bg-plumNoir px-4 py-3 text-sm text-cloudDancer">
            Received. We will respond within one business day.
          </p>
        )}
      </form>
    </div>
  );
}
