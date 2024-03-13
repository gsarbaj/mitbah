'use server'
export async function randomIdGeneration() {
    return crypto.randomUUID()
}