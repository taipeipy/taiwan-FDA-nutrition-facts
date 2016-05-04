import React, {PropTypes} from 'react'
import { Table } from 'react-bootstrap'

const DetailCard = ({result}) => {
    return (
        <div>
            <h4>{'名稱： '}{result.name}</h4>
            <h4>{'俗名： '}{result.trivial}</h4>
            <h4>{'類型： '}{result.category}</h4>

            <Table>
                <tbody>
                    <tr>
                        <td>一份重(g)</td>
                        <td>{result.piece_weight}</td>
                    </tr>
                    <tr>
                        <td>熱量(kcal)</td>
                        <td>{result.calories}</td>
                    </tr>
                    <tr>
                        <td>水分(g)</td>
                        <td>{result.water}</td>
                    </tr>
                    <tr>
                        <td>粗蛋白(g)</td>
                        <td>{result.protein}</td>
                    </tr>
                    <tr>
                        <td>粗脂肪(g)</td>
                        <td>{result.fat}</td>
                    </tr>
                    <tr>
                        <td>總碳水化合物(g)</td>
                        <td>{result.carbs}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

DetailCard.proptypes = {
    result: PropTypes.objectOf({
        calories: PropTypes.string.isRequired,
        water: PropTypes.string.isRequired,
        protein: PropTypes.string.isRequired,
        fat: PropTypes.string.isRequired,
        carbs: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        trivial: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
    }).isRequired
}

export default DetailCard
