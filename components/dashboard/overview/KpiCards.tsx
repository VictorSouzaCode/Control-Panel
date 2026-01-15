import { Card, CardHeader, CardContent, CardTitle } from "../../ui/card"

type CardsProps = {
    title: string,
    value: number | string
}

const KpiCards = ({ title, value }: CardsProps) => {

    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p>{value}</p>
            </CardContent>
        </Card>
    )
}

export default KpiCards