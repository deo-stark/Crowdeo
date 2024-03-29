"use client";

import {Card, CardBody, CardFooter, CardHeader, Divider, Image, Link} from "@nextui-org/react";
import React, {useEffect, useState} from 'react'

import Nav from "@/Components/Navbar";
import Review from "@/Components/Review";
import SubmitReview from "@/Components/SubmitReview";
import {useParams} from "next/navigation";

const SingleCompany = () => {
    const {id} = useParams()
    const [company, setCompany] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:3000/api/company/${id}`)
            .then(res => res.json())
            .then(data => setCompany(data))
    }, [id]);

    return (
        <div>
            <Nav/>
            <Card className="max-w-screen mx-24 my-6">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md">
              {company?.name}
          </p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p>
            {company?.description}
        </p>
      </CardBody>
      <Divider/>
      <CardFooter>
        <SubmitReview company_id={id}/>
      </CardFooter>
    </Card>
            <div className="max-w-screen mx-24 my-6">
                <h1 className={'text-2xl my-2 font-semibold'}>
                    Reviews
                </h1>
                <div className="grid grid-cols-4 gap-4">
                    {
                        company?.Review.map((review, index) => {
                            return <Review key={index} review={review}/>
                        })
                    }
                </div>
            </div>

        </div>
    )
}
export default SingleCompany
