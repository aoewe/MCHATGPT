import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';

const BASE_URL = process.env.BASE_URL ?? "http://69.172.75.129:5000/api/login";

// 定义 API 函数
export async function login(
    req: NextApiRequest,
    res: NextApiResponse
) {
    // 检查 HTTP 方法

    let baseUrl = BASE_URL;


    return fetch(`${baseUrl}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        body: req.body,
    });
}