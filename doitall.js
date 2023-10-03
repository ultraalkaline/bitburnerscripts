/** @param {NS} ns **/
export async function main(ns) {
    let hostName = ns.getHostname();
    while (true) {
        await ns.grow(hostName).then(() => ns.weaken(hostName)).then(() => ns.hack(hostName));
    }
}
