import React from 'react'
import styles from './Output.module.css'
import Card from './Card'
const Output = ({ipinformation}) => {
  console.log(ipinformation)
  return (
<div className={styles.container}>
 <Card title='IP ADDRESS' data={ipinformation?.ip}></Card>
 <Card title='LOCATION' data={`${ipinformation?.location.country}, ${ipinformation?.location.region}`}></Card>
 <Card title='TIMEZONE' data={`${ipinformation?.country} ${ipinformation?.location.timezone}`}></Card>
 <Card title='ISP' data={ipinformation?.isp}></Card>
</div>
  )
}

export default Output