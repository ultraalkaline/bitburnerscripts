/** @param {NS} ns **/
export async function main(ns) {
	let hostName = ns.getHostname();
	let growTime = ns.getGrowTime(hostName);

	while (true) {
		setTimeout(growTime);
		await ns.grow(hostName);
		await ns.weaken(hostame);
	}
}
