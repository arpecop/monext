async function runExperiment() { const timeout1 = asyncTimeout(2000); // First
timeout, 2 seconds const timeout2 = asyncTimeout(3000); // Second timeout, 3
seconds console.log("Starting Promise.all with different timeouts..."); const
result1 = await Promise.all([timeout1, timeout2]); console.log("Promise.all with
different timeouts completed."); const timeout3 = asyncTimeout(1000); // Third
timeout, 1 second console.log("Starting a single timeout with await..."); await
timeout3; console.log("Single timeout with await completed."); }
runExperiment();
