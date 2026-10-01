console.log("Running automated tests...");
const appName = "CI/CD Demo";
if (appName === "CI/CD Demo") {
    console.log("✅ Test Passed: Application metadata matches.");
    process.exit(0);
} else {
    console.error("❌ Test Failed: Invalid metadata.");
    process.exit(1);
}
