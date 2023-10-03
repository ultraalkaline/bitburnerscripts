/** @param {NS} ns **/
export async function main(ns) {
	let hostname = ns.getHostname();
	let weakentime = ns.getWeakenTime(hostname);

	while (true) {
		setTimeout(weakentime);
		await ns.weaken(hostname);
	}
}
