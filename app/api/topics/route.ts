import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
	const initValue = { title: "", description: "", _id: "" };
	try {
		return NextResponse.json([initValue], { status: 200 });
	} catch (error: any) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
};

export const POST = async (request: NextRequest) => {
	const data = await request.json();

	try {
		return NextResponse.json(
			{ message: "Not functional yet" },
			{ status: 201 }
		);
	} catch (error: any) {
		return NextResponse.json(
			{ error: "Couldn't get the topic" },
			{ status: 500 }
		);
	}
};

export const DELETE = async (request: NextRequest) => {
	try {
		const id = request.nextUrl.searchParams.get("id");

		return NextResponse.json(
			{ message: "Not functional yet" },
			{ status: 200 }
		);
	} catch (error: any) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
};
