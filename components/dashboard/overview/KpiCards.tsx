import { Card, CardHeader, CardContent, CardTitle } from "../../ui/card"

type CardsProps = {
    title: string,
    value: number | string
}

const KpiCards = ({ title, value }: CardsProps) => {

    return (
        <Card className="flex-1 flex justify-center">
            <CardHeader>
                <CardTitle className="text-center">
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-center">{value}</p>
            </CardContent>
        </Card>
    )
}

export default KpiCards