import { Mail, MessageCircle, Upload } from "lucide-react";
import { PageHero } from "@/components/interior";

export default function ContactPage() {
  return <main><PageHero eyebrow="Contribute and connect" title="Add something useful to the shared record." intro="The renewed Hub will invite resources, field experience and questions. Submission channels will be activated once the coordinating institution and editorial process are confirmed." />
    <section className="contact-options"><article><Upload aria-hidden="true" /><p className="section-number">Share</p><h2>Suggest a resource</h2><span>Policy briefs, tools, training materials, datasets and documented practice.</span><button disabled>Form coming with the CMS</button></article><article><MessageCircle aria-hidden="true" /><p className="section-number">Ask</p><h2>Send a seed-system question</h2><span>Questions can later be routed to relevant experts without exposing personal contact details.</span><button disabled>Routing under review</button></article><article><Mail aria-hidden="true" /><p className="section-number">Connect</p><h2>Contact the Hub</h2><span>The official coordination address will be added after institutional ownership is agreed.</span><button disabled>Address pending confirmation</button></article></section>
    <section className="editorial-note"><p className="eyebrow light">Why the pause?</p><h2>Participation needs stewardship.</h2><p>Public forms, discussion spaces and member accounts require clear responsibility for moderation, privacy, response times and safeguarding. The code is ready for these services, but the prototype does not pretend that governance is already settled.</p></section>
  </main>;
}
