import { cartTable, db } from "@/lib/drizzle";
import { validateDelete, validatePostData, validateUserid } from "@/lib/utils";
import { and, eq } from "drizzle-orm";
import { check } from "drizzle-orm/mysql-core";
import { NextRequest, NextResponse } from "next/server";
import z from "zod";

export const GET = async (request: NextRequest) => {
  const url = request.nextUrl.searchParams;
  const user_id = url.get("userid") as string;
  //console.log("userid", user_id);
  try {
    if (url.has("userid")) {
      const { userid } = validateUserid.parse({ userid: user_id });
      //console.log("userid5", userid);
      const cartData = await db
        .select()
        .from(cartTable)
        .where(eq(cartTable.userid, userid));

      return NextResponse.json({ cartData });
    } else {
      throw new Error("user id not found");
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "invalid request payload" },
        { status: 422 }
      );
    }
    //console.log("error", error);
    return NextResponse.json({
      message: (error as { message: string }).message,
    });
  }
};

export const POST = async (request: NextRequest) => {
  const req = await request.json();
  const validatedBody = validatePostData.parse(req);
  // req = validatedBody both are
  // here validatedBody is used on the place of req because it provide types

  try {
    // to check data is already exist or not
    const alreadyData = await db
      .select()
      .from(cartTable)
      .where(
        and(
          eq(cartTable.userid, validatedBody.userid),
          eq(cartTable.productid, validatedBody.productid)
        )
      );
    // if data is already exist than update the quantity
    if (alreadyData.length > 0) {
      const updatedata = {
        userid: validatedBody.userid,
        productid: validatedBody.productid,
        quantity: (alreadyData[0].quantity as number) + 1,
      };
      await db
        .update(cartTable)
        .set(updatedata)
        .where(
          and(
            eq(cartTable.userid, validatedBody.userid),
            eq(cartTable.productid, validatedBody.productid)
          )
        );
      return NextResponse.json("OK");
    } else {
      const cartData = await db
        .insert(cartTable)
        .values(validatedBody)
        .returning();
      return NextResponse.json(cartData);
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "invalid request payload" },
        { status: 422 }
      );
    }
    //console.log((error as { message: string }).message);
    return NextResponse.json({ error: (error as { message: string }).message });
  }
};

export const PUT = async (request: NextRequest) => {
  const req = await request.json();
  const validatedBody = validatePostData.parse(req);
  try {
    const res = await db
      .update(cartTable)
      .set(validatedBody)
      .where(
        and(
          eq(cartTable.userid, validatedBody.userid),
          eq(cartTable.productid, validatedBody.productid)
        )
      )
      .returning();
    return NextResponse.json("OK");
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "invalid request payload" },
        { status: 422 }
      );
    }
    //console.log((error as { message: string }).message);
    return NextResponse.json({ error: (error as { message: string }).message });
  }
};

export const DELETE = async (request: NextRequest) => {
  const url = request.nextUrl.searchParams;
  const user_id = url.get("userid") as string;
  const product_id = url.get("productid") as string;
  const { userid, productid } = validateDelete.parse({
    userid: user_id,
    productid: product_id,
  });

  try {
    await db
      .delete(cartTable)
      .where(
        and(eq(cartTable.userid, userid), eq(cartTable.productid, productid))
      )
      .returning();
    return NextResponse.json("OK");
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "invalid request payload" },
        { status: 422 }
      );
    }
    //console.log((error as { message: string }).message);
    return NextResponse.json({ error: (error as { message: string }).message });
  }
};
