//Atomic

//the atomics object provides atomic operations as static methods

//atomic operations: an indicisible sequence of primitive operations that must complete without interruption

//In concurrent programming are program operations that run completely independently of any other processes

//Methods:
//When memory is shared, multiple threads can read and write the same data in memory.
// Atomic operations make sure that predictable values are written and read,
// that operations are finished before the next operation starts and that operations are not interrupted.

// there some methods but i think the most importat are (wait and notify)
//this function is the same as in c for semaforos, waits and sleeps untill its signal to continio

// the notify method notifies up some agents that are sleeping in the wait queue
Atomics.wait(typedArray, index, value[, timeout])

Atomics.notify(typedArray, index, count)