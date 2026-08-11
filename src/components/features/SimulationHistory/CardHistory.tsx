import { Goal, Trash2, SquareArrowOutUpRight } from 'lucide-react'
import type { SimulationRecord } from '../../../data/simulation'
import { Divider } from '../../shared/Divider'

interface SimulationHistoryCardProps {
    simulation: SimulationRecord
    onDelete: (id: string) => void
    onViewDetails: (id: string) => void
}

export function CardHistory({
    simulation,
    onDelete,
    onViewDetails,
}: SimulationHistoryCardProps) {

    const parseCurrency = (value: string) => {
        return Number(
            value
            .replace(/\./g, '')
            .replace(',', '.')
        )
    }

    const goalAmount = parseCurrency(simulation.goalAmount)
    const goalDeadline = Number(simulation.goalDeadline)

    const monthlySaving = goalAmount / goalDeadline

    const formattedDate = new Date(
        simulation.createdAt,
    ).toLocaleDateString('pt-BR')

   return (
        <div className="grid w-full grid-cols-1 items-center gap-6 rounded-2xl bg-card p-6 text-center shadow-[4px_4px_18px_0px_rgba(0,0,0,0.2)] md:grid-cols-[320px_1fr_1fr_1fr_auto_auto] md:text-left">
            <div className="flex flex-col items-center gap-4 md:flex-row md:items-center md:justify-start">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100">
                    <Goal size={22} className="text-purple-600" />
                </div>

                <div className="text-center md:text-left">
                    <p className="text-lg font-semibold text-foreground">
                        {simulation.goalName}
                    </p>

                    <p className="mt-1 text-sm text-muted-foreground">
                        {formattedDate}
                    </p>
                </div>
            </div>

            <div className="w-full md:w-auto md:flex-1">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    CUSTO DA META
                </p>

                <p className="mt-1 text-lg font-semibold text-foreground">
                    R$ {goalAmount.toLocaleString('pt-BR', {
                        minimumFractionDigits: 2,
                    })}
                </p>
            </div>

            <div className="w-full md:w-auto md:flex-1">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    PRAZO
                </p>

                <p className="mt-1 text-lg font-semibold text-foreground">
                    {goalDeadline} meses
                </p>
            </div>

            <div className="w-full md:w-auto md:flex-1">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    ECONOMIA MENSAL
                </p>

                <p className="mt-1 text-lg font-semibold text-foreground">
                    R$ {monthlySaving.toLocaleString('pt-BR', {
                        minimumFractionDigits: 2,
                    })}
                </p>
            </div>

            <div className="flex w-full items-center md:h-12 md:w-px md:shrink-0">
                <Divider
                    orientation="horizontal"
                    spacing={0}
                    className="md:hidden"
                />

                <Divider
                    orientation="vertical"
                    spacing={0}
                    className="hidden md:block"
                />
            </div>

            <div className="flex items-center justify-center gap-3 md:justify-end">
                <button
                    type="button"
                    onClick={() => onDelete(simulation.id)}
                    className="flex cursor-pointer items-center justify-center rounded-full bg-muted p-2 text-destructive transition-colors hover:bg-muted/80"
                    aria-label="Excluir simulação"
                >
                    <Trash2 size={25} color='red' />
                </button>

                <button
                    type="button"
                    onClick={() => onViewDetails(simulation.id)}
                    className="flex w-max cursor-pointer items-center gap-2 rounded-3xl border border-border bg-secondary-button px-4 py-3 text-sm font-medium transition-opacity hover:opacity-80"
                >
                    <SquareArrowOutUpRight size={16} />
                    Ver detalhes
                </button>
            </div>
        </div>
    )
}