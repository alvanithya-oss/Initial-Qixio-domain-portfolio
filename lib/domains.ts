import domains from "@/data/domains.json";

export function getDomains() {
  return domains;
}

export function getDomain(name: string) {
  return domains.find(
    d => d.name.toLowerCase() === name.toLowerCase()
  );
}
