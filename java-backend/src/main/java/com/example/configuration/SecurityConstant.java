package com.example.configuration;

public class SecurityConstant {
    public static final String JWT_KEY = System.getenv("JWT_SECRET") != null ? System.getenv("JWT_SECRET") : "jxgEQeXHuPq8VdbyYFNkANdudQ53YUn4";
    public static final String JWT_HEADER = "Authorization";
}
