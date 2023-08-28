import { NextRequest, NextResponse } from "next/server";

export const GET = async (
	req: NextRequest,
	{ params: { id } }: { params: { id: string } }
) => {
	const initValue = { title: "", description: "", _id: "" };

	try {
		return NextResponse.json(initValue, { status: 200 });
	} catch (error: any) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
};

export const PATCH = async (
	request: NextRequest,
	{ params: { id } }: { params: { id: string } }
) => {
	const { title, description } = await request.json();

	try {
		return NextResponse.json(
			{ message: "Not functional yet" },
			{ status: 200 }
		);
	} catch (error: any) {
		return NextResponse.json({ error }, { status: 500 });
	}
};
