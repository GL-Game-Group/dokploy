ALTER TABLE "domain" ADD COLUMN "dnsProviderId" text;
ALTER TABLE "domain" ADD COLUMN "autoDns" boolean DEFAULT false NOT NULL;
ALTER TABLE "domain" ADD COLUMN "dnsRecordId" text;
ALTER TABLE "domain" ADD COLUMN "zoneId" text;
ALTER TABLE "domain" ADD CONSTRAINT "domain_dnsProviderId_dns_provider_dnsProviderId_fk" FOREIGN KEY ("dnsProviderId") REFERENCES "dns_provider"("dnsProviderId") ON DELETE SET NULL;
