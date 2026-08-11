import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

import { PageHero } from "../components/shared/PageHero"
import { CardHistory } from "../components/features/SimulationHistory/CardHistory"
import { useSimulationStorage } from "../hooks/useSimulationStorage"
import type { SimulationRecord } from "../data/simulation"

export function SimulationHistoryPage() {
    const navigate = useNavigate()

    const { getAllSimulations, deleteSimulation } = useSimulationStorage()

    const [simulations, setSimulations] = useState<SimulationRecord[]>([])

    useEffect(() => {
        const savedSimulations = getAllSimulations()

        setSimulations(savedSimulations)
    }, [])

    const handleDelete = (id: string) => {
        deleteSimulation(id)

        setSimulations((current) =>
            current.filter((simulation) => simulation.id !== id),
        )
    }

    const handleViewDetails = (id: string) => {
        navigate(`/resultado/${id}`)
    }

    return (
        <main className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
            <PageHero
                title="Histórico de Simulações"
                subtitle="Acompanhe o histórico de seus planos financeiros."
            />

            <div className="mt-8 space-y-4">
                {simulations.length > 0 ? (
                    simulations.map((simulation) => (
                        <CardHistory
                            key={simulation.id}
                            simulation={simulation}
                            onDelete={handleDelete}
                            onViewDetails={handleViewDetails}
                        />
                    ))
                ) : (
                    <div className="rounded-lg border border-dashed border-gray-300 p-10 text-center">
                        <p className="text-foreground mb-1 text-1xl font-semibold sm:text-3xl">
                            Nenhuma simulação encontrada
                        </p>
                        <p className="text-muted-foreground mb-8 text-sm">
                            Suas simulações aparecerão aqui quando você realizar uma.
                        </p>
                    </div>
                )}
            </div>
        </main>
    )
}