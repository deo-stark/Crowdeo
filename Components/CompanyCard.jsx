import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

export default function CompanyCard() {
  return (
      <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3">
              <div className="flex flex-col">
                  <p className="text-md">NextUI</p>
              </div>
          </CardHeader>
          <Divider/>
          <CardBody>
              <p>Make beautiful websites regardless of your design experience.</p>
          </CardBody>
          <Divider/>
          <Link className="text-small text-default-500 p-4" href={"/yguhijop[p"}>View</Link>
      </Card>
  );
}